import { useMutation, useQuery } from "@apollo/client";
import {
    DeleteConversationsDocument,
    DeleteConversationsMutation,
    DeleteConversationsMutationVariables,
    DeleteItemDocument,
    DeleteItemMutation,
    DeleteItemMutationVariables,
    DeleteOwnerApplicationsDocument,
    DeleteOwnerApplicationsMutation,
    DeleteOwnerApplicationsMutationVariables,
    DeleteRenterApplicationsDocument,
    DeleteRenterApplicationsMutation,
    DeleteRenterApplicationsMutationVariables,
    DeleteReviewsDocument,
    DeleteReviewsMutation,
    DeleteReviewsMutationVariables,
    DeleteStockStatusesDocument,
    DeleteStockStatusesMutation,
    DeleteStockStatusesMutationVariables,
    GetApplicationFormDocument
} from "@/features/utils/graphql/typeDefs/graphql";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const useDraft = () => {
    const router = useRouter();
    const { item } = router.query;

    const [deleteItem] = useMutation<DeleteItemMutation, DeleteItemMutationVariables>(DeleteItemDocument);
    const [deleteStockStatuses] = useMutation<DeleteStockStatusesMutation, DeleteStockStatusesMutationVariables>(DeleteStockStatusesDocument);
    const [deleteConversations] = useMutation<DeleteConversationsMutation, DeleteConversationsMutationVariables>(DeleteConversationsDocument);
    const [deleteOwnerApplications] = useMutation<DeleteOwnerApplicationsMutation, DeleteOwnerApplicationsMutationVariables>(DeleteOwnerApplicationsDocument);
    const [deleteRenterApplications] = useMutation<DeleteRenterApplicationsMutation, DeleteRenterApplicationsMutationVariables>(DeleteRenterApplicationsDocument);
    const [deleteReviews] = useMutation<DeleteReviewsMutation, DeleteReviewsMutationVariables>(DeleteReviewsDocument);

    const [deleteConfirmation, setDeleteConfirmation] = useState<boolean>(false);

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setDeleteConfirmation(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setDeleteConfirmation]);

    const { loading, error, data } = useQuery(GetApplicationFormDocument, {
        variables: { itemId: Number(item) }
    });

    return {
        deleteConfirmation,
        setDeleteConfirmation,
        modalRef,
        deleteItem,
        deleteStockStatuses,
        deleteConversations,
        deleteOwnerApplications,
        deleteRenterApplications,
        deleteReviews,
        item,
        router,
        loading,
        error,
        data
    }
}

export default useDraft;