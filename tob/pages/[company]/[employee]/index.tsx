import Error from "@/components/Error";
import RootLayout from "@/components/Layout";
import SideNavigation from "@/components/SideNavigation";
import { ApplicationStatus } from "@/features/utils/graphql/typeDefs/graphql";
import useLoginConfirmation from "@/hooks/useLoginConfirmation";
import usePagination from "@/hooks/usePagination";
import { ArrowPathIcon, ClipboardIcon, HomeIcon, PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import { formatDistance } from "date-fns";
import { NextRouter } from "next/router";
import { ReactElement } from "react";

const Home = () => {
    const {
        data,
        error,
        loading,
        employeeId,
        refetch
    } = useLoginConfirmation();

    const {
        router,
        currentPage,
        totalPages,
        paginatedItems
    } = usePagination(data?.employeeInfo.company.items ?? []);

    if (loading) return "Loading...";

    if (error || !data?.employeeInfo) {
        console.log("index.tsx: " + error);
        return (
            <Error />
        );
    }

    return (
        <div>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><a><HomeIcon className="w-4 h-4" /> Home</a></li>
                </ul>
            </div>
            <div className="flex justify-end mb-5">
                <button
                    className="py-1 btn rounded-full bg-secondary text-white font-normal"
                    onClick={() => router.push({
                        pathname: "/[company]/[employee]/[item]/draft",
                        query: { company: data.employeeInfo.company.name, employee: employeeId, item: 0 }
                    })}
                >Create New Item <PlusIcon className="h-5 w-5 ml-1 float-right" /></button>
                <button
                    className="py-1 ml-2 btn rounded-full bg-accent text-white font-normal"
                    onClick={() => refetch()}
                >Refresh <ArrowPathIcon className="h-5 w-5 ml-1 float-right" /></button>
            </div>
            <div className="flex flex-col items-center space-y-6">
                <div className="card bg-base-100 shadow-xl h-auto max-h-fit w-auto max-w-fit">
                    <div className="flex justify-end"></div>
                    <div className="card-body p-5 overflow-x-auto rounded-box border-base-content/5">
                        <table className="table">
                            <thead>
                                <tr className="bg-base-200">
                                    <th>Item ID</th>
                                    <th>Name</th>
                                    <th>Last Updated</th>
                                    <th>Status</th>
                                    <th>Total Availability</th>
                                    <th>Current Availability</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedItems.map((item, index) => (
                                    <tr key={item.id + index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{getFormattedDate(item.ownerApplication.updatedAt)}</td>
                                        <td>{item.ownerApplication.status}</td>
                                        <td>{item.stockStatus?.totalStock}</td>
                                        <td>{item.stockStatus?.currentStock}</td>
                                        <td>{item.ownerApplication.status === ApplicationStatus.Draft
                                            ? <PencilSquareIcon
                                                className="h-5 w-5 text-info cursor-pointer"
                                                onClick={() => router.push({
                                                    pathname: "/[company]/[employee]/[item]/draft",
                                                    query: { company: data.employeeInfo.company.name, employee: employeeId, item: item.id }
                                                })}
                                            />
                                            : <ClipboardIcon
                                                className="h-5 w-5 text-info cursor-pointer"
                                                onClick={() => router.push({
                                                    pathname: "/[company]/[employee]/[item]",
                                                    query: { company: data.employeeInfo.company.name, employee: employeeId, item: item.id }
                                                })}                                                
                                            />
                                        }</td>
                                        <td>
                                            <button
                                                disabled={item.ownerApplication.status !== ApplicationStatus.Published}
                                                className="py-1 btn rounded-full bg-accent font-normal cursor-pointer"
                                                onClick={() => router.push(`/${router.query.company}/${router.query.employee}/${item.id}/renter-application-list`)}
                                            >Renter Applications
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="join grid grid-cols-2 mt-6">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1, totalPages, router, employeeId, data.employeeInfo.company.name)}
                        className={`join-item btn btn-outline ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        Previous
                    </button>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1, totalPages, router, employeeId, data.employeeInfo.company.name)}
                        className={`join-item btn btn-outline ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
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

export default Home;

function getFormattedDate(date: Date) {
    const formattedDate = formatDistance(new Date(date), new Date(), { addSuffix: true });
    return formattedDate;
}

// Handle pagination navigation
function handlePageChange(
    newPage: number,
    totalPages: number,
    router: NextRouter,
    employeeId: number,
    companyName: string
) {
    if (newPage >= 1 && newPage <= totalPages) {
        router.push({
            pathname: router.pathname,
            query: { employee: employeeId, page: newPage, company: companyName },
        });
    }
};