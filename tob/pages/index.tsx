import RootLayout from "@/components/Layout";
import LoginForm from "@/components/LoginForm";
import { ReactElement, useEffect, useState } from "react";

const Login = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) return null;

    return (
        <div className="flex items-center bg-base-200 h-full py-10 overflow-y-auto">
            <LoginForm />
        </div>
    );
}

Login.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    );
}

export default Login;