import { GetApplicationFormQuery } from "@/features/utils/graphql/typeDefs/graphql";
import FormDropdown from "./FormDropdown";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import ItemCategoriesDropdown from "./ItemCategoriesDropdown";
import useItemForm from "@/hooks/useItemForm";

export interface ApplicationFormProps {
    savedData?: GetApplicationFormQuery;
}

const ItemForm = ({ savedData }: ApplicationFormProps) => {
    const {
        handleSubmit,
        onSubmit,
        register,
        setValue,
        setActionType
    } = useItemForm({ savedData });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Name</legend>
                <input
                    type="text"
                    className="input rounded-full w-full"
                    placeholder="Name"
                    defaultValue={savedData?.itemInfo?.name ?? ""}
                    {...register("name", { required: true })}
                />
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Category</legend>
                <ItemCategoriesDropdown savedValue={savedData?.itemInfo?.category ?? undefined} setValue={setValue} />
            </fieldset>

            <fieldset>
                <legend className="fieldset-legend">Image</legend>
                <input
                    type="file"
                    className="file-input"
                //{...register("imageURL")}
                />
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Max Duration</legend>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="number"
                        className="input rounded-full"
                        placeholder="Max Duration"
                        defaultValue={savedData?.itemInfo?.maxDuration ?? undefined}
                        {...register("maxDuration", { required: true })}
                    />
                    <FormDropdown
                        savedValue={savedData?.itemInfo?.maxDurationType}
                        dataType={"MAXDURATION"}
                        setValue={setValue}
                    />
                </div>
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Deposit Fee</legend>
                <label className="input rounded-full">
                    $
                    <input
                        type="number"
                        className="rounded-full"
                        placeholder="Deposit Fee"
                        defaultValue={savedData?.itemInfo?.deposit ?? undefined}
                        {...register("deposit", { required: true })}
                    />
                </label>
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Fees</legend>
                <div className="grid grid-cols-2 gap-4">
                    <label className="input rounded-full">
                        $
                        <input
                            type="number"
                            className="rounded-full"
                            placeholder="Fee"
                            defaultValue={savedData?.itemInfo?.fee ?? undefined}
                            {...register("fee", { required: true })}
                        />
                    </label>
                    <FormDropdown
                        savedValue={savedData?.itemInfo?.feeType}
                        dataType={"FEE"}
                        setValue={setValue}
                    />
                </div>
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Description</legend>
                <textarea
                    className="textarea input"
                    placeholder="Description"
                    defaultValue={savedData?.itemInfo?.description ?? undefined}
                    {...register("description", { required: true })}>
                </textarea>
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">The Total Number of Items</legend>
                <input
                    type="number"
                    className="input rounded-full"
                    placeholder="Type Here"
                    defaultValue={savedData?.itemInfo?.stockStatus?.totalStock ?? undefined}
                    {...register("totalStock", { required: true })}
                />
            </fieldset>

            <div className="flex justify-center mt-5">
                <button
                    type="submit"
                    className="py-1 btn rounded-full bg-info text-white bg-neutral-content mt-4 mr-1"
                    onClick={() => setActionType("Save")}
                >Save</button>
                <button
                    type="submit"
                    className="py-1 btn rounded-full bg-accent mt-4 ml-1"
                    onClick={() => setActionType("Submit")}
                >Submit <PaperAirplaneIcon className="h-5 w-5 float-right" /></button>
            </div>
        </form>
    );
}

export default ItemForm;