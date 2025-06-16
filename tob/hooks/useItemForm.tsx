import { ApplicationFormProps } from "@/components/ItemForm";
import { ItemCategory, SaveItemApplicationDocument, SubmitItemApplicationDocument } from "@/features/utils/graphql/typeDefs/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    category: z.nativeEnum(ItemCategory),
    fee: z.number(),
    feeType: z.string().default("daily"),
    maxDuration: z.number().int(),
    maxDurationType: z.string().default("days"),
    //imageURL: z.string(),
    deposit: z.number(),
    totalStock: z.number().int(),
    currentStock: z.number().int()
}).refine((data) => data.category === undefined, {
    message: "Choose One Category",
    path: ["category"]
});

export type Schema = z.infer<typeof schema>

const useItemForm = ({ savedData }: ApplicationFormProps) => {
    const router = useRouter();
    const { register, handleSubmit, setValue } = useForm<Schema>();
    const [actionType, setActionType] = useState<"Save" | "Submit">("Save");

    useEffect(() => {
        if (savedData?.itemInfo) {
            const form = savedData.itemInfo;
            console.log("Saved Data: " + JSON.stringify(form));

            setValue("id", form.id);
            setValue("name", form.name ?? "");
            setValue("description", form.description ?? "");
            setValue("category", form.category as ItemCategory);
            setValue("fee", form.fee ?? 0);
            setValue("feeType", form.feeType ?? "daily");
            setValue("maxDuration", form.maxDuration ?? 0);
            setValue("maxDurationType", form.maxDurationType ?? "days");
            setValue("deposit", form.deposit ?? 0);
            setValue("totalStock", form.stockStatus?.totalStock ?? 0);
            setValue("currentStock", form.stockStatus?.currentStock ?? 0);
        }
    }, [savedData, setValue]);

    const [runMutation] = useMutation(
        actionType === "Save" ? SaveItemApplicationDocument : SubmitItemApplicationDocument
    );

    const onSubmit: SubmitHandler<Schema> = async (data: Schema) => {
        const result = schema.safeParse(data);
        if (!result.success) {
            console.log(result.error.format());
            return;
        }

        try {
            const response = await runMutation({
                variables: {
                    createItemInput: {
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        category: data.category,
                        fee: Number(data.fee),
                        feeType: data.feeType,
                        maxDuration: Math.floor(data.maxDuration),
                        maxDurationType: data.maxDurationType,
                        //imageURL: data.imageURL,
                        deposit: Number(data.deposit),
                        company: router.query.company as string,
                        totalStock: Math.floor(data.totalStock),
                        currentStock: Math.floor(data.totalStock)
                    }
                }
            });

            console.log(response);

            if (actionType === "Save") {
                router.push({
                    pathname: `/${router.query.company}/${router.query.employee}`,
                })
            } else {
                router.push({
                    pathname: `/${router.query.company}/${router.query.employee}/[item]`,
                    query: { item: data.id },
                })
            }
        } catch (error) {
            console.log("Mutation Error: " + error);
            router.push({
                pathname: `/${router.query.company}/${router.query.employee}`,
                query: { toastType: "error", toastMessage: "Error! Please try again." },
            });
        }
    }

    return {
        handleSubmit,
        onSubmit,
        register,
        setValue,
        setActionType
    }
}

export default useItemForm;