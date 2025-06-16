import { FindRenterApplicationsDocument, GetItemInfoQuery } from "@/features/utils/graphql/typeDefs/graphql";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface ItemsProps {
    itemInfo?: GetItemInfoQuery["itemInfo"];
    toast?: boolean;
}

const useRentFormStatus = ({ itemInfo }: ItemsProps) => {
    const router = useRouter();
    // TODO: Check if the renter has already set their address
    const isAddressSet = true;
    const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
    const [address, setAddress] = useState("");

    const storedId = Number(localStorage.getItem("renterId"));

    const { data, refetch } = useQuery(FindRenterApplicationsDocument, {
        variables: {
            canApplyInput: {
                renterId: storedId ?? -1,
                renterApplicationId: itemInfo?.id ?? -1
            }
        },
        skip: !storedId || !itemInfo?.id,
    });

    // To disable a "Apply for Rent" button after submission
    useEffect(() => {
        if (router.query.showToast === "true") {
            refetch();
            router.replace(`/items/${itemInfo?.id}`, undefined, { shallow: true });
        }
    }, [router.query.showToast, refetch, router, itemInfo?.id]);

    return {
        data,
        router,
        storedId,
        isAddressSet,
        setIsDeliveryModalOpen,
        isDeliveryModalOpen,
        address,
        setAddress
    }
}

export default useRentFormStatus;
