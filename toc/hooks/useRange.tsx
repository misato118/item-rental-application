import { Schema } from "@/components/Filters";
import { useEffect } from "react";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";

const useRange = (range: number[], setValue: UseFormSetValue<Schema>, watch: UseFormWatch<Schema>) => {
    const registerName: "maxPrice" | "maxDuration" = range[range.length - 1] >= 100 ? "maxPrice" : "maxDuration";
    const maxValue = watch(registerName, 75);

    useEffect(() => {
        setValue(registerName, maxValue);
    }, [maxValue, setValue, registerName]);

    return {
        registerName,
        maxValue
    }
}

export default useRange;