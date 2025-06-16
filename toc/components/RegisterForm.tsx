import { CreateRenterDocument } from "@/features/utils/graphql/typeDefs/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

type Schema = z.infer<typeof schema>

const RegisterForm = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<Schema>();
    const [createRenterMutation] = useMutation(CreateRenterDocument);

    const onSubmit: SubmitHandler<Schema> = async (data: Schema) => {
        const result = schema.safeParse(data);

        if (!result.success) {
            console.error("Validation failed", result.error.format());
            return;
        }

        try {
            const response = await createRenterMutation({
                variables: {
                    createRenterInput: {
                        username: data.username,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        password: data.password
                    }
                }
            });

            console.log(response);
            router.push({
                pathname: "/", // Change here after creating a login page
            });
        } catch (error) {
            console.log("Mutation Error: " + error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Username</legend>
                <input
                    type="text"
                    className="input rounded-full"
                    placeholder="Username"
                    {...register("username", { required: true })}
                />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name</legend>
                <input
                    type="text"
                    className="input rounded-full"
                    placeholder="First Name"
                    {...register("firstName", { required: true })}
                />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                    type="text"
                    className="input rounded-full"
                    placeholder="Last Name"
                    {...register("lastName", { required: true })}
                />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input
                    type="email"
                    className="input rounded-full"
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input
                    type="password"
                    className="input rounded-full"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Confirm Password</legend>
                <input
                    type="password"
                    className="input rounded-full"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", { required: true })}
                />
            </fieldset>

            <div className="flex justify-center my-4">
                <button type="submit" className="btn btn-info rounded-full text-white">Register</button>
            </div>

            <p>If you already have am account, {" "}
                <a
                    onClick={() => router.push("/")}
                    className="underline underline-offset-4 cursor-pointer"
                >login here</a></p>
        </form>
    );
}

export default RegisterForm;