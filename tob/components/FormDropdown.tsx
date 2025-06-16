import useFormDropdown from "@/hooks/useFormDropdown";
import { Schema } from "@/hooks/useItemForm";
import { UseFormSetValue } from "react-hook-form";

type DataType = "FEE" | "MAXDURATION";
type TimeType = "DA" | "MONTH" | "YEAR";

enum PriceTime {
    DA = "Day",
    MONTH = "Month",
    YEAR = "Year"
}

enum DurationTime {
    DA = "Days",
    MONTH = "Months",
    YEAR = "Years"
}

// Dropdown for price/duration
const FormDropdown = ({ savedValue, dataType, setValue }: { savedValue: string | null | undefined, dataType: DataType, setValue: UseFormSetValue<Schema> }) => {
    const {
        timeType,
        type,
        setTimeType
    } = useFormDropdown(savedValue, dataType, setValue);

    return (
        <div className="dropdown dropdown-bottom dropdown-center flex justify-center">
            <button type="button" className="btn btn-outline btn-circle w-full px-2">
                {getButtonLabel(timeType, type)}
            </button>

            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow w-full">
                <li><button type="button" onClick={(e) => checkAndCloseDropDown(e, "DA", setTimeType)}>{getButtonLabel("DA", type)}</button></li>
                <li><button type="button" onClick={(e) => checkAndCloseDropDown(e, "MONTH", setTimeType)}>{getButtonLabel("MONTH", type)}</button></li>
                <li><button type="button" onClick={(e) => checkAndCloseDropDown(e, "YEAR", setTimeType)}>{getButtonLabel("YEAR", type)}</button></li>
            </ul>
        </div>
    );
}

export default FormDropdown;

// Manually close a dropdown
function checkAndCloseDropDown(
    e: React.MouseEvent<HTMLButtonElement>,
    val: TimeType,
    setCategoryType: React.Dispatch<React.SetStateAction<TimeType>>
) {
    const targetEl = e.currentTarget;
    if (targetEl && targetEl.matches(':focus')) {
        setCategoryType(val);
        setTimeout(function () {
            targetEl.blur();
        }, 0);
    }
}

// Get a dropdown label
function getButtonLabel(
    typeValue: TimeType,
    type: string
) {
    if (type === "feeType") {
        return PriceTime[typeValue as keyof typeof PriceTime] + " ▼";
    }

    if (type === "maxDurationType") {
        return DurationTime[typeValue as keyof typeof DurationTime] + " ▼";
    }
}