import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { ChangeRenterAppStatusInput, RenterApplicationStatusType } from "@/features/utils/graphql/typeDefs/graphql";
import { RenterAppType } from "@/hooks/useRenterAppList";

const schema = z.object({
    status: z.nativeEnum(RenterApplicationStatusType)
});

type Schema = z.infer<typeof schema>;

const useReturnedStatusAction = (
    app: RenterAppType | null | undefined,
    setPendingChanges: React.Dispatch<React.SetStateAction<ChangeRenterAppStatusInput[]>>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const { setValue, handleSubmit } = useForm<Schema>();

    useEffect(() => {
        setValue("status", RenterApplicationStatusType.Completed);
    }, [setValue]);

    const onSubmit: SubmitHandler<Schema> = async (data: Schema) => {
        const result = schema.safeParse(data);
        if (!result.success) {
            console.log(result.error.format());
            return;
        }
        
        setPendingChanges((prev) => [
            ...prev.filter((change) => change.id !== app?.id),
            { id: app?.id ?? 0, status: data.status }
        ]);
        setModal(false);
    };


    return {
        handleSubmit,
        onSubmit
    }
}

export default useReturnedStatusAction;