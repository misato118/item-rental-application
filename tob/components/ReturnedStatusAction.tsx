import useReturnedStatusAction from "@/hooks/useReturnedStatusAction";
import { AppliedProps } from "@/hooks/useStatusModal";

const ReturnedStatusAction = ({ setModal, app, setPendingChanges }: AppliedProps) => {
    const {
        handleSubmit,
        onSubmit
    } = useReturnedStatusAction(app, setPendingChanges, setModal);

    return (
        <div className="flex flex-col justify-center items-center">
            <p className="font-bold">Deliver the Item</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-end mt-6">
                    <button className="btn btn-outline rounded-full mr-1" onClick={() => setModal(false)}>
                        Back
                    </button>
                    <button
                        type="submit"
                        className="btn rounded-full bg-secondary text-white ml-1"
                    >Mark as Completed</button>
                </div>
            </form>
        </div>
    );
}

export default ReturnedStatusAction;