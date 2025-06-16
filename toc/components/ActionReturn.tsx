import { GetRenterInfoQuery, RenterApplicationStatusType } from "@/features/utils/graphql/typeDefs/graphql";
import useActionReturn from "@/hooks/useActionReturn";
import { Dispatch, SetStateAction } from "react";

type RenterApplicationData = NonNullable<
    GetRenterInfoQuery["renterInfo"]
>["renterApplications"][number];

type Props = {
    application: RenterApplicationData | null;
    setSelectedApplication: Dispatch<SetStateAction<RenterApplicationData | null>>;
    action: "Confirm Return" | "N/A" | null;
    onClose: () => void;
};

const ActionReturn = ({ application, setSelectedApplication, action, onClose }: Props) => {
    const {
        modalRef,
        handleSubmit,
        onSubmit,
        setValue
    } = useActionReturn(onClose, setSelectedApplication);

    return (
        <div className="modal modal-open" role="dialog" ref={modalRef}>
            <div className="modal-box px-12 flex flex-col items-center w-full max-w-xl">
                {action === "Confirm Return" && application ? (
                    <div>
                        <h3 className="text-lg font-bold mb-3">Please Confirm Your Return.</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex justify-end mt-6">
                                <button className="btn btn-outline rounded-full mr-1" onClick={onClose}>
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    className="btn rounded-full bg-secondary text-white ml-1"
                                    onClick={() => { setValue("id", application.id); setValue("status", RenterApplicationStatusType.Returned); }}
                                >I Have Returned the Item</button>
                            </div>
                        </form>
                    </div>
                ) : <p>No Action is Needed</p>}
            </div>
        </div>
    );
}

export default ActionReturn;