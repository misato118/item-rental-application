import { GetItemCategoriesDocument, ItemCategory } from "@/features/utils/graphql/typeDefs/graphql";
import { Schema } from "@/hooks/useItemForm";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";

// Dropdown for item categories
const ItemCategoriesDropdown = ({ savedValue, setValue }: { savedValue: ItemCategory | undefined, setValue: UseFormSetValue<Schema> }) => {
    const [getItemCategories, { data, error }] = useLazyQuery(GetItemCategoriesDocument);
    const [categoryVal, setCategoryVal] = useState<ItemCategory | undefined>(undefined);

    useEffect(() => {
        getItemCategories();
    }, [getItemCategories]);

    if (error) console.error("GraphQL error:", error);

    return (
        <div className="dropdown dropdown-bottom dropdown-center flex justify-center">
            <button type="button" className="btn btn-outline btn-circle w-full px-2">
                {savedValue ? getButtonLabel(savedValue) : getButtonLabel(categoryVal)}
            </button>

            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow w-full">
                {data?.itemCategories?.map((category, index) => {
                    return (
                        <li key={category + index}>
                            <button type="button" onClick={(e) => checkAndCloseDropDown(e, category, setValue, setCategoryVal)}>{category}</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ItemCategoriesDropdown;

// Manually close a dropdown
function checkAndCloseDropDown(
    e: React.MouseEvent<HTMLButtonElement>,
    val: ItemCategory,
    setCategoryType: UseFormSetValue<Schema>,
    setCategoryVal: React.Dispatch<React.SetStateAction<ItemCategory | undefined>>
) {
    const targetEl = e.currentTarget;
    if (targetEl && targetEl.matches(':focus')) {
        setCategoryType("category", val);
        setCategoryVal(val);
        setTimeout(function () {
            targetEl.blur();
        }, 0);
    }
}

function getButtonLabel(
    value: ItemCategory | undefined
) {
    if (!value) {
        return "Choose Category ▼";
    } else {
        return value + " ▼";
    }
}