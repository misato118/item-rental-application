import { AppliedProps } from "@/hooks/useStatusModal";
import useAppliedStatusAction, { DecitionType } from "@/hooks/useAppliedStatusAction";

const AppliedStatusAction = ({ setModal, app, setPendingChanges }: AppliedProps) => {
    const {
        handleSubmit,
        onSubmit,
        decision,
        setDecision
    } = useAppliedStatusAction(app, setPendingChanges, setModal);

    return (
        <div>
            <p className="mb-5 font-bold">Approve or Decline the Application</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="dropdown dropdown-bottom dropdown-center flex justify-center mb-3">
                    <button type="button" className="btn btn-outline btn-circle w-full px-2">
                        {getButtonLabel(decision)}
                    </button>

                    <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow w-full">
                        <li><button type="button" onClick={(e) => { checkAndCloseDropDown(e, "Approve", setDecision) }}>Approve</button></li>
                        <li><button type="button" onClick={(e) => { checkAndCloseDropDown(e, "Decline", setDecision) }}>Decline</button></li>
                    </ul>
                </div>
                <div className="flex justify-center items-center mt-6">
                    <button className="btn btn-outline rounded-full mr-1" onClick={() => setModal(false)}>
                        Back
                    </button>
                    <button
                        type="submit"
                        className="btn rounded-full bg-secondary text-white ml-1"
                    >Change Status</button>
                </div>
            </form>

        </div>
    );
}

export default AppliedStatusAction;

// Manually close a dropdown
function checkAndCloseDropDown(
    e: React.MouseEvent<HTMLButtonElement>,
    val: DecitionType,
    setDecision: React.Dispatch<React.SetStateAction<DecitionType>>
) {
    const targetEl = e.currentTarget;
    if (targetEl && targetEl.matches(':focus')) {
        setDecision(val);
        setTimeout(function () {
            targetEl.blur();
        }, 0);
    }
}

// Get a dropdown label
function getButtonLabel(
    typeValue: DecitionType
) {
    return typeValue + " ▼"
}