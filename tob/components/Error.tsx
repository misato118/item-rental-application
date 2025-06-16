import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import RootLayout from "./Layout";

// TODO: Add some UI here
const Error: NextPageWithLayout = () => {
    return (
        <p>Something went wrong!</p>
    );
}

Error.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    );
}

export default Error;