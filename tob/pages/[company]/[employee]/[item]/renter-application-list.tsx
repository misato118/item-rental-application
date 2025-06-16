import Error from "@/components/Error";
import RootLayout from "@/components/Layout";
import SideNavigation from "@/components/SideNavigation";
import { ChangeRenterAppStatusInput, SaveAllRenterAppStatusesMutation, SaveAllRenterAppStatusesMutationVariables } from "@/features/utils/graphql/typeDefs/graphql";
import usePagination from "@/hooks/usePagination";
import { MutationFunction } from "@apollo/client";
import { ArrowDownTrayIcon, ExclamationCircleIcon, HomeIcon, ListBulletIcon, TruckIcon } from "@heroicons/react/24/outline";
import { NextRouter } from "next/router";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { format } from 'date-fns';
import StatusModal from "@/components/StatusModal";
import useRenterAppList, { RenterAppType } from "@/hooks/useRenterAppList";

const RenterApplicationList = () => {
    const {
        router,
        isStatusModalOpen,
        setIsStatusModalOpen,
        application,
        setApplication,
        pendingChanges,
        setPendingChanges,
        changeRenterAppStatusMutation,
        loading,
        error,
        data        
    } = useRenterAppList();

    const {
        currentPage,
        totalPages,
        paginatedItems
    } = usePagination(data?.itemInfo?.renterApplications ?? []);

    if (loading) return "Loading...";

    if (error || !data?.itemInfo) {
        return (
            <Error />
        );
    }

    return (
        <div>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><a onClick={() => router.push(`/${router.query.company}/${router.query.employee}`)}><HomeIcon className="w-4 h-4" /> Home</a></li>
                    <li><a><ListBulletIcon className="w-4 h-4" /> Renter Application List</a></li>
                </ul>
            </div>
            <div className="flex justify-end mb-5">
                <button
                    className="py-1 ml-2 btn rounded-full bg-accent text-white font-normal"
                    disabled={pendingChanges.length === 0}
                    onClick={() => saveAllChanges(changeRenterAppStatusMutation, pendingChanges, setPendingChanges)}
                >Save All Changes <ArrowDownTrayIcon className="h-5 w-5 float-right" /></button>
            </div>
            <div className="flex flex-col justify-center items-center mb-10">
                <div className="card bg-base-100 shadow-xl flex items-center w-auto max-w-fit p-10">
                    <h1 className="text-3xl font-bold mb-3">{data?.itemInfo?.stockStatus?.currentStock} items left</h1>
                    <p>{data?.itemInfo?.name}</p>
                    <p>{data?.itemInfo?.id}</p>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-6">
                <div className="card bg-base-100 shadow-xl h-auto max-h-fit w-auto max-w-fit">
                    <div className="card-body p-5 overflow-x-auto rounded-box border-base-content/5">
                        <table className="table">
                            <thead>
                                <tr className="bg-base-200">
                                    <th>User ID</th>
                                    <th>username</th>
                                    <th>Requested Fee</th>
                                    <th>Requested Duration</th>
                                    <th>Applied Date</th>
                                    <th>Current Status</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedItems.map((app, index) => {
                                    const hasPendingChange = pendingChanges.some(
                                        (change) => change.id === app.id
                                    );

                                    return (
                                        <tr key={app.id + index}>
                                            <td>{app.renter.id}</td>
                                            <td>{app.renter.username}</td>
                                            <td>{app.form?.offeringPrice}</td>
                                            <td>{app.form?.offeringDuration}</td>
                                            <td>{format(new Date(app.createdAt), "MMM dd, yyyy")}</td>
                                            <td className="flex justify-center items-center">
                                                <div
                                                    className={`badge badge-outline border-${getCurrentStatus(app) ?? "UNAVAILABLE"} text-${getCurrentStatus(app) ?? "UNAVAILABLE"}`}>
                                                    {getCurrentStatus(app) ?? "N/A"}
                                                </div>
                                            </td>
                                            <td><TruckIcon className="h-5 w-5 text-info cursor-pointer" onClick={() => { setApplication(app); setIsStatusModalOpen(true) }} /></td>
                                            <td>
                                                {hasPendingChange && (
                                                    <ExclamationCircleIcon className="h-5 w-5" />
                                                )}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="join grid grid-cols-2 mt-6">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1, totalPages, router, Number(router.query.employee), router.query.company + "", Number(router.query.item))}
                        className={`join-item btn btn-outline ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        Previous
                    </button>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1, totalPages, router, Number(router.query.employee), router.query.company + "", Number(router.query.item))}
                        className={`join-item btn btn-outline ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        Next
                    </button>
                </div>
            </div>

            {isStatusModalOpen && (
                <StatusModal
                    setModal={setIsStatusModalOpen}
                    itemName={data?.itemInfo?.name ?? ""}
                    itemId={data?.itemInfo?.id}
                    feeType={data?.itemInfo?.feeType ?? ""}
                    maxDurationType={data?.itemInfo?.maxDurationType ?? ""}
                    app={application}
                    setPendingChanges={setPendingChanges}
                />
            )}
        </div>
    );
}

RenterApplicationList.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            <div className="flex w-full h-full">
                <SideNavigation />
                <div className="flex-1 overflow-y-auto p-10 bg-base-200">
                    {page}
                </div>
            </div>
        </RootLayout>
    );
}

export default RenterApplicationList;

// Handle pagination navigation
function handlePageChange(
    newPage: number,
    totalPages: number,
    router: NextRouter,
    employeeId: number,
    companyName: string,
    itemId: number,
) {
    if (newPage >= 1 && newPage <= totalPages) {
        router.push({
            pathname: router.pathname,
            query: { employee: employeeId, page: newPage, company: companyName, item: itemId },
        });
    }
};

function getCurrentStatus(
    application: RenterAppType
) {
    const statusArr = application?.renterApplicationStatuses
    const arrLength = statusArr?.length;
    
    if (arrLength && statusArr) {
        return statusArr[arrLength - 1].status;
    }
    
    return undefined;
}

async function saveAllChanges(
    changeRenterAppStatusMutation: MutationFunction<SaveAllRenterAppStatusesMutation, SaveAllRenterAppStatusesMutationVariables>,
    pendingChanges: ChangeRenterAppStatusInput[],
    setPendingChanges: Dispatch<SetStateAction<ChangeRenterAppStatusInput[]>>
) {
    try {
        const response = await changeRenterAppStatusMutation({
            variables: {
                saveAllRenterAppStatusesInput: {
                    appStatusArr: pendingChanges
                }
            }
        });

        console.log(response);
        setPendingChanges([]);
    } catch (error) {
        console.log(error)
    }
}