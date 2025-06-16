import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { ChangeRenterAppStatusInput, RenterApplicationStatusType } from "@/features/utils/graphql/typeDefs/graphql";
import { RenterAppType } from "@/hooks/useRenterAppList";

export type DecitionType = "Approve" | "Decline";

const schema = z.object({
    status: z.nativeEnum(RenterApplicationStatusType)
});

type Schema = z.infer<typeof schema>;

const useAppliedStatusAction = (
    app: RenterAppType | null | undefined,
    setPendingChanges: React.Dispatch<React.SetStateAction<ChangeRenterAppStatusInput[]>>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const [decision, setDecision] = useState<DecitionType>("Approve");

    const { setValue, handleSubmit } = useForm<Schema>();

    useEffect(() => {
        if (decision === "Approve") {
            setDecision("Approve");
            setValue("status", RenterApplicationStatusType.Accepted);
        } else if (decision === "Decline") {
            setDecision("Decline");
            setValue("status", RenterApplicationStatusType.Declined);
        }
    }, [decision, setValue]);

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
        onSubmit,
        decision,
        setDecision
    }
}

export default useAppliedStatusAction;