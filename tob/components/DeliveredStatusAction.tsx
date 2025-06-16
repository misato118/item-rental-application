import { AppliedProps } from "@/hooks/useStatusModal";
import { RenterApplicationStatusType } from "@/features/utils/graphql/typeDefs/graphql";
import useDeliveredStatusAction from "@/hooks/useDeliveredStatusAction";

const DeliveredStatusAction = ({ setModal, app, setPendingChanges }: AppliedProps) => {
    const {
        handleSubmit,
        onSubmit,
        setValue
    } = useDeliveredStatusAction(app, setPendingChanges, setModal);

    return (
        <div>
            <p className="mb-5 font-bold">Approve or Decline the Application</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center items-center mt-6">
                    <button className="btn btn-outline rounded-full mr-1" onClick={() => setModal(false)}>
                        Back
                    </button>
                    <button
                        type="submit"
                        className="btn rounded-full bg-secondary text-white ml-1"
                        onClick={() => { setValue("status", RenterApplicationStatusType.Rented); }}
                    >Confirm Item Delivery</button>
                </div>
            </form>
        </div>
    );
}

export default DeliveredStatusAction;