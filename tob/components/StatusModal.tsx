import { ChangeRenterAppStatusInput, RenterApplicationStatusType } from "@/features/utils/graphql/typeDefs/graphql";
import { format } from 'date-fns';
import AppliedStatusAction from "./AppliedStatusAction";
import AcceptedStatusAction from "./AcceptedStatusAction";
import ReturnedStatusAction from "./ReturnedStatusAction";
import { RenterAppType } from "@/hooks/useRenterAppList";
import useStatusModal, { StatusModalProps } from "@/hooks/useStatusModal";
import DeliveredStatusAction from "./DeliveredStatusAction";

type RenterAppStatusType = {
    __typename?: "RenterApplicationStatus";
    status: RenterApplicationStatusType;
    updatedAt: Date;
};

const StatusModal: React.FC<StatusModalProps> = ({ setModal, itemName, itemId, feeType, maxDurationType, app, setPendingChanges }) => {
    const {
        modalRef,
        renterApplicationStatuseArr,
        isDeclined
    } = useStatusModal(setModal, app);

    return (
        <div className="modal modal-open" role="dialog" ref={modalRef}>
            <div className="modal-box px-12 flex flex-col items-center w-auto max-w-4xl">
                <ul className="steps mb-5">
                    {renterApplicationStatuseArr.map((appStatus, index) => {
                        const matchedApplication = app?.renterApplicationStatuses?.find(
                            (application) => application.status === appStatus
                        );

                        const step = getStep(matchedApplication, appStatus, isDeclined);

                        if (step == null) {
                            return null;
                        }

                        return step ? (
                            <li data-content="✓" className="step step-primary" key={appStatus + index}>
                                <div>
                                    <p className="text-bold">{matchedApplication?.status}</p>
                                    <p className="text-sm">{format(new Date(matchedApplication?.updatedAt ?? ""), "PPpp")}</p>
                                </div>
                            </li>
                        ) : (
                            <li data-content="✓" className="step" key={appStatus + index}>
                                {appStatus}
                            </li>
                        );
                    })}
                </ul>
                <div className="mb-5">
                    <h3 className="text-lg font-bold">{itemName}</h3>
                    <p className="text-center">{itemId}</p>
                </div>
                <div className="mb-5">
                    <p><span className="text-sm">{app?.renter?.username}&apos;s Offering Price:</span> ${app?.form?.offeringPrice} {feeType}</p>
                    <p><span className="text-sm">{app?.renter?.username}&apos;s Offering Duration:</span> {app?.form?.offeringDuration} {maxDurationType}</p>
                </div>

                <p className="text-sm">Your Next Step is:</p>
                <div className="flex justify-center items-center">{getNextStep(app, setModal, setPendingChanges)}</div>
            </div>
        </div>
    )
}

export default StatusModal;

function getNextStep(
    app: RenterAppType | null,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    setPendingChanges: React.Dispatch<React.SetStateAction<ChangeRenterAppStatusInput[]>>
) {
    const arr = app?.renterApplicationStatuses;
    const currAppStatus = arr ? arr[arr.length - 1] : undefined;
    const currStatus = currAppStatus ? currAppStatus.status : undefined;

    if (currStatus === RenterApplicationStatusType.Applied) {
        return (
            <AppliedStatusAction setModal={setModal} app={app} setPendingChanges={setPendingChanges} />
        );
    }
    
    if (currStatus === RenterApplicationStatusType.Declined) {
        return (
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold">N/A</p>
                <p className="font-bold mb-5">This Application is Closed</p>
                <button className="btn btn-outline rounded-full" onClick={() => setModal(false)}>
                    Back
                </button>
            </div>
        );
    }
    
    if (currStatus === RenterApplicationStatusType.Accepted) {
        return (
            <AcceptedStatusAction setModal={setModal} app={app} setPendingChanges={setPendingChanges} />
        );
    }
    
    if (currStatus === RenterApplicationStatusType.Delivered) {
        return (
            <DeliveredStatusAction setModal={setModal} app={app} setPendingChanges={setPendingChanges} />
        )
    }
    
    if (currStatus === RenterApplicationStatusType.Rented) {
        return (
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold">N/A</p>
                <p className="font-bold mb-5">Wait for the Renter to Return Your Item</p>
                <button className="btn btn-outline rounded-full" onClick={() => setModal(false)}>
                    Back
                </button>
            </div>
        );
    }
    
    if (currStatus === RenterApplicationStatusType.Returned) {
        return (
            <ReturnedStatusAction setModal={setModal} app={app} setPendingChanges={setPendingChanges} />
        );
    }
    
    if (currStatus === RenterApplicationStatusType.Completed) {
        return (
            <div>
                <p className="font-bold mb-5">This Item Application has been Completed</p>
                <button className="btn btn-outline rounded-full" onClick={() => setModal(false)}>
                    Back
                </button>
            </div>
        );
    }
    
    return <p className="font-bold">Error</p>;
}

function getStep(
    matchedApplication: RenterAppStatusType | undefined,
    appStatusType: RenterApplicationStatusType,
    isDeclined: boolean,
) {
    if (matchedApplication) {
        return true; // Check the status
    }
    
    if (appStatusType === RenterApplicationStatusType.Declined) {
        return null; // Skip the status
    } else {
        if (isDeclined && appStatusType === RenterApplicationStatusType.Accepted) {
            return null // Skip the status
        }
        
        return false; // Uncheck the status
    }
}