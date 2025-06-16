import { CreateRenterApplicationDocument } from "@/features/utils/graphql/typeDefs/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

// yearly, monthly, daily
const priceDictionary: Record<string, string> = {
    "daily": "Day",
    "monthly": "Month",
    "yearly": "Year",
}; 

const schema = z.object({
    offeringPrice: z.number(),
    offeringDuration: z.number(),
}).refine((data) => data.offeringPrice !== 0, {
    message: "Fee cannot be 0",
    path: ["offeringPrice"]    
}).refine((data) => data.offeringDuration != 0, {
    message: "Duration cannot be 0",
    path: ["offeringDuration"]
});

type Schema = z.infer<typeof schema>

const useRentForm = (renterId: number) => {
    const router = useRouter();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Schema>({
        defaultValues: {
            offeringPrice: 0,
            offeringDuration: 0,
        },
    });

    const [createRenterApplicationMutation] = useMutation(CreateRenterApplicationDocument);

    const onSubmit: SubmitHandler<Schema> = async (data: Schema) => {
        const result = schema.safeParse(data);

        if (!result.success) {
            console.error("Validation failed", result.error.format());
            return;
        }

        try {
            const response = await createRenterApplicationMutation({
                variables: {
                    createRenterApplicationInput: {
                        renterId: renterId,
                        itemId: Number(router.query.item),
                        offeringPrice: data.offeringPrice,
                        offeringDuration: data.offeringDuration
                    }
                }
            });

            console.log(response);
            router.push({
                pathname: `/items/${Number(router.query.item)}`,
                query: { showToast: "true" }
            });
        } catch (error) {
            console.log("Mutation Error: " + error);
        }
    }

    return {
        router,
        handleSubmit,
        onSubmit,
        register,
        priceDictionary,
        errors,
        reset
    }
}

export default useRentForm;