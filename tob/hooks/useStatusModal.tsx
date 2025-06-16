import { ChangeRenterAppStatusInput, RenterApplicationStatusType } from "@/features/utils/graphql/typeDefs/graphql";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { RenterAppType } from "@/hooks/useRenterAppList";

export interface StatusModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    itemName: string;
    itemId: number;
    feeType: string | null;
    maxDurationType: string | null;
    app: RenterAppType | null;
    setPendingChanges: React.Dispatch<React.SetStateAction<ChangeRenterAppStatusInput[]>>;
}

export interface AppliedProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    app: RenterAppType | null | undefined;
    setPendingChanges: React.Dispatch<React.SetStateAction<ChangeRenterAppStatusInput[]>>;
}

const renterApplicationStatuseArr = [RenterApplicationStatusType.Applied, RenterApplicationStatusType.Declined, RenterApplicationStatusType.Accepted,
RenterApplicationStatusType.Delivered, RenterApplicationStatusType.Rented, RenterApplicationStatusType.Returned, RenterApplicationStatusType.Completed];

export const RenterApplicationStatusColor = {
    APPLIED: "warning",
    DECLINED: "error",
    ACCEPTED: "green-500",
    DELIVERED: "info",
    RENTED: "secondary",
    RETURNED: "success",
    COMPLETED: "neutral-content",
    UNAVAILABLE: "primary-content"
} as const;

const useStatusModal = (setModal: Dispatch<SetStateAction<boolean>>, app: RenterAppType | null) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const isDeclined = app?.renterApplicationStatuses?.some(
        (status) => status.status === RenterApplicationStatusType.Declined
      ) ?? false;

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setModal(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setModal]);

    return {
        modalRef,
        renterApplicationStatuseArr,
        isDeclined
    }
}

export default useStatusModal;