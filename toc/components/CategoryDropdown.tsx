import { useState } from "react";

type CategoryType = "SELECT" | "CATEGORY" | "REVIEW" | "POSTED DATE";

// A dropdown for categories such as "Category", "Review", "Posted Date"
const CategoryDropdown = () => {
    const [categoryType, setCategoryType] = useState<CategoryType>("SELECT");

    return (
        <div className="dropdown dropdown-bottom dropdown-center mr-2">
            <button className="btn btn-outline btn-wide btn-circle dropdown-toggle px-4">
                { getButtonLabel(categoryType) }
            </button>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow w-full">
                <li><button onClick={ (e) => checkAndCloseDropDown(e, "CATEGORY", setCategoryType) }>Category</button></li>
                <li><button onClick={ (e) => checkAndCloseDropDown(e, "REVIEW", setCategoryType) }>Review</button></li>
                <li><button onClick={ (e) => checkAndCloseDropDown(e, "POSTED DATE", setCategoryType) }>Posted Date</button></li>
            </ul>
        </div>
    );
}

export default CategoryDropdown;

// Manually close a dropdown
function checkAndCloseDropDown(
    e: React.MouseEvent<HTMLButtonElement>,
    val: CategoryType,
    setCategoryType: React.Dispatch<React.SetStateAction<CategoryType>>
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
function getButtonLabel(typeValue: CategoryType) {
    if (typeValue === "CATEGORY") {
        return "Category ▼";
    } else if (typeValue === "REVIEW") {
        return "Review ▼";
    } else if (typeValue === "POSTED DATE") {
        return "Posted Date ▼";
    }
    
    return "Select ▼";
}