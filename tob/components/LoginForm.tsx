import useLogin from "@/hooks/useLogin";

const LoginForm = () => {
    const {
        register,
        loading,
        error,
        handleSubmit,
        onSubmit
    } = useLogin();

    if (error) {
        console.log("Error details:", error);
    }

    return (
        <div className="card rounded-lg shadow-lg bg-white w-2/5 mx-auto overflow-hidden grid grid-cols-2">
            {/* Left Section: Info Panel */}
            <div className="bg-info text-white flex flex-col items-center justify-center px-10 py-5 h-full">
                <h2 className="text-2xl font-semibold text-center mb-7">Login</h2>
                <p className="text-sm leading-relaxed text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            {/* Right Section: Form */}
            <div className="py-20 px-5">
                <h2 className="text-3xl font-bold text-center mb-6">Company Login</h2>

                <div className="flex justify-center mb-4 w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center">
                        <input
                            type="text"
                            className="input rounded-full mb-5"
                            placeholder="Username"
                            {...register("username", { required: true })}
                        />
                        <input
                            type="text"
                            className="input rounded-full"
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />

                        <div className="flex my-4 justify-center">
                            <button type="submit" className="btn btn-info rounded-full text-white">Login</button>
                        </div>
                        {loading && <p>Loading...</p>}
                        {error && <p className="text-red-500">Something went wrong!</p>}
                    </form>
                </div>

                <div className="flex flex-col">
                    <a
                        href="#"
                        className="underline underline-offset-4 cursor-pointer text-center"
                    >Forgot your password?</a>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;