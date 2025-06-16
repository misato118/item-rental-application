import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/features/utils/providers/apollo";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <ApolloProvider client={client}>
            {getLayout(<Component {...pageProps} />)}
        </ApolloProvider>
    );
}