import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import useRentForm from "@/hooks/useRentForm";

const RentForm = ({ feeType, maxDurationType, renterId }: { feeType: string, maxDurationType: string, renterId: number }) => {
    const {
        router,
        handleSubmit,
        onSubmit,
        register,
        priceDictionary,
        errors,
        reset
    } = useRentForm(renterId);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-9 gap-2 justify-center items-center mb-2">
                <h3 className="col-span-2 font-semibold">Offering Fee</h3>
                <label className="input rounded-full bg-white border border-neutral-content flex flex-row items-center col-span-4">
                    <p className="px-2">$</p>
                    <input
                        type="number"
                        min="0"
                        className="rounded-full pl-1"
                        placeholder="Type here"
                        {...register("offeringPrice", { valueAsNumber: true, required: true })}
                        />
                </label>
                <button type="button" className="py-1 btn rounded-full bg-white border border-neutral-content col-span-2" disabled={true}>
                    /{priceDictionary[feeType]}
                </button>
                <div className="tooltip col-span-1 inline-block flex justify-center tooltip-info" data-tip="You can negotiate a fee. The frequency is fixed by the company.">
                    <QuestionMarkCircleIcon className="h-7 w-7 text-info" />
                </div>
            </div>
            {errors.offeringPrice && (
                    <p className="text-red-500 text-sm">{errors.offeringPrice.message}</p>
            )}

            <div className="grid grid-cols-9 gap-2 justify-center items-center mb-2">
                <h3 className="col-span-2 font-semibold">Rental Duration</h3>
                <input
                    type="number"
                    min="0"
                    className="input input-bordered rounded-full mt-2 col-span-4"
                    placeholder="Type here"                   
                    {...register("offeringDuration", { valueAsNumber: true, required: true })}
                    />
                <button type="button" className="py-1 btn rounded-full bg-white border border-neutral-content col-span-2" disabled={true}>
                    {maxDurationType.charAt(0).toUpperCase() + maxDurationType.slice(1)}
                </button>
                <div className="tooltip col-span-1 inline-block flex justify-center tooltip-info" data-tip="You can set an ideal rental duration. The frequency is fixed by the company.">
                    <QuestionMarkCircleIcon className="h-7 w-7 text-info" />
                </div>
            </div>
            {errors.offeringDuration && (
                    <p className="text-red-500 text-sm">{errors.offeringDuration.message}</p>
            )}

            <button
                type="button"
                className="py-1 btn rounded-full bg-accent bg-neutral-content mt-4 mr-1"
                onClick={() => {
                    reset();
                    const itemId = router.query.item;
                    router.push(`/items/${itemId}`);
                }}
            >Cancel</button>
            <button type="submit" className="py-1 btn rounded-full bg-accent mt-4 ml-1">Submit</button>
        </form>
    );
}

export default RentForm;