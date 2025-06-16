import { useState, useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";

const priceArray = ["daily", "monthly", "yearly"];
const durationArray = ["days", "months", "years"];
type TimeType = "TYPE" | "DA" | "MONTH" | "YEAR";

type FormValues = {
    priceType: string;
    durationType: string;
    maxPrice: number;
    maxDuration: number;
};

const useFilterDropdown = (dataType: string, setValue: UseFormSetValue<FormValues>) => {
    const array = dataType === "PRICE" ? priceArray : durationArray;
    const type = dataType === "PRICE" ? "priceType" : "durationType";

    const [timeType, setTimeType] = useState<TimeType>("TYPE");

    useEffect(() => {
        if (timeType !== "TYPE") {
            if (timeType === "DA") {
                setValue(type, array[0]);
            } else if (timeType === "MONTH") {
                setValue(type, array[1]);
            } else if (timeType === "YEAR") {
                setValue(type, array[2]);
            }
        }
    }, [timeType, setValue, array, type]);

    return {
        timeType,
        type,
        setTimeType
    }
}

export default useFilterDropdown;