import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
        fetchOptions: {
            mode: "cors",
        },
        headers: {
            "Content-Type": "application/json",
        },
    }),
    cache: new InMemoryCache(),
});