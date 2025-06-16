import { GetRenterIdDocument } from "@/features/utils/graphql/typeDefs/graphql";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    username: z.string(),
    password: z.string()
});

type Schema = z.infer<typeof schema>

const useLogin = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<Schema>();
    const [getRenterId, { data, loading, error }] = useLazyQuery(GetRenterIdDocument);

    useEffect(() => {
        if (data?.renterId.id) {
            localStorage.setItem("renterId", data?.renterId.id.toString());

            //const redirectPath = typeof router.query.redirect === "string" ? router.query.redirect : "/";
            //router.push(redirectPath);
            router.push("/");
        }
    }, [data, router]);

    const onSubmit: SubmitHandler<Schema> = async (formData: Schema) => {
        const result = schema.safeParse(formData);

        if (!result.success) {
            console.error("Validation failed", result.error.format());
            return;
        }

        getRenterId({
            variables: {
                loginRenterInput: {
                    username: formData.username,
                    password: formData.password
                }
            }
        });
    }

    return {
        router,
        register,
        loading,
        error,
        handleSubmit,
        onSubmit
    }
}

export default useLogin;