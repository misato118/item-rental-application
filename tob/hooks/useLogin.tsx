import { GetEmployeeIdDocument } from "@/features/utils/graphql/typeDefs/graphql";
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
    const [getEmployeeId, { data, loading, error }] = useLazyQuery(GetEmployeeIdDocument);

    useEffect(() => {
        if (data?.employeeId.id) {
            localStorage.setItem("employeeId", data?.employeeId.id.toString());

            const companyPath = data?.employeeId.company.name.replaceAll(" ", "");
            router.push({
                pathname: "/[company]/[employee]",
                query: { company: companyPath, employee: data?.employeeId.id }
            });
        }
    }, [data, router]);

    const onSubmit: SubmitHandler<Schema> = async (formData: Schema) => {
        const result = schema.safeParse(formData);
        if (!result.success) {
            console.log(result.error.format());
            return;
        }

        getEmployeeId({
            variables: {
                loginEmployeeInput: {
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