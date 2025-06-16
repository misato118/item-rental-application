import { GetEmployeeInfoDocument } from "@/features/utils/graphql/typeDefs/graphql";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const useLoginConfirmation = () => {
    const [storedId, setStoredId] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setStoredId(localStorage.getItem("employeeId"));
        }
    }, []);

    const employeeId = storedId !== null ? Number(storedId) : 0;
    const { loading, error, data, refetch } = useQuery(GetEmployeeInfoDocument, {
        variables: { employeeId: employeeId },
        skip: employeeId === null,
        // To show updated data
        fetchPolicy: "network-only",
        nextFetchPolicy: "cache-first"
    });

    return {
        data,
        error,
        loading,
        employeeId,
        refetch
    }
}

export default useLoginConfirmation;