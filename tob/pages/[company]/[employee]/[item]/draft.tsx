import ItemForm from "@/components/ItemForm";
import RootLayout from "@/components/Layout";
import SideNavigation from "@/components/SideNavigation";
import {
    DeleteConversationsMutation,
    DeleteConversationsMutationVariables,
    DeleteItemMutation,
    DeleteItemMutationVariables,
    DeleteOwnerApplicationsMutation,
    DeleteOwnerApplicationsMutationVariables,
    DeleteRenterApplicationsMutation,
    DeleteRenterApplicationsMutationVariables,
    DeleteReviewsMutation,
    DeleteReviewsMutationVariables,
    DeleteStockStatusesMutation,
    DeleteStockStatusesMutationVariables,
} from "@/features/utils/graphql/typeDefs/graphql";
import useDraft from "@/hooks/useDraft";
import { MutationFunction } from "@apollo/client";
import { ExclamationTriangleIcon, HomeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

const ItemApplicationForm = () => {
    const {
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
    } = useDraft();

    if (loading) return `Loading...`;
    if (error) return `Error! ${error}`;

    return (
        <div>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><a onClick={() => router.push(`/${router.query.company}/${router.query.employee}`)}><HomeIcon className="w-4 h-4" /> Home</a></li>
                    <li><a><PencilSquareIcon className="w-4 h-4" /> Draft</a></li>
                </ul>
            </div>
            <div className="bg-base-200 h-full py-10 overflow-y-auto">
                {deleteConfirmation && (
                    <div className="modal modal-open" role="dialog" ref={modalRef}>
                        <div className="modal-box px-12 flex flex-col items-center w-full max-w-lg">
                            <ExclamationTriangleIcon className="w-8 h-8 text-error mb-3" />
                            <h3 className="text-lg font-bold mb-3">Are you sure?</h3>
                            <p className="mb-4">This will delete the item forever.</p>
                            <div className="flex justify-end mt-6">
                                <button className="btn btn-outline rounded-full mr-1" onClick={() => setDeleteConfirmation(false)}>
                                    Back
                                </button>
                                <button
                                    className="py-1 btn rounded-full bg-error ml-1"
                                    onClick={async () => {
                                        const success = await deleteDraft(
                                            deleteItem,
                                            deleteStockStatuses,
                                            deleteConversations,
                                            deleteOwnerApplications,
                                            deleteRenterApplications,
                                            deleteReviews,
                                            Number(item));

                                        if (success) {
                                            router.push({
                                                pathname: `/${router.query.company}/${router.query.employee}`,
                                            });
                                        } else {
                                            console.log("Can not delete the item.");
                                        }
                                    }}>Yes, delete it
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="card rounded-lg shadow-lg bg-white px-20 py-10 w-1/2 mx-auto">
                    <div className="card-body">
                        <div className="flex justify-between">
                            <div>
                                <button
                                    className="py-1 btn rounded-full bg-error"
                                    onClick={() => setDeleteConfirmation(true)}
                                ><TrashIcon className="h-5 w-5 float-left" />Delete</button>
                            </div>
                            <div className="badge badge-warning rounded-full">Draft</div>
                        </div>
                        <ItemForm savedData={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

ItemApplicationForm.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            <div className="flex w-full h-full">
                <SideNavigation />
                <div className="flex-1 overflow-y-auto p-10 bg-base-200">
                    {page}
                </div>
            </div>
        </RootLayout>
    );
}

export default ItemApplicationForm;

// This deletes an item and its stock status
async function deleteDraft(
    deleteItem: MutationFunction<DeleteItemMutation, DeleteItemMutationVariables>,
    deleteStockStatuses: MutationFunction<DeleteStockStatusesMutation, DeleteStockStatusesMutationVariables>,
    deleteConversations: MutationFunction<DeleteConversationsMutation, DeleteConversationsMutationVariables>,
    deleteOwnerApplications: MutationFunction<DeleteOwnerApplicationsMutation, DeleteOwnerApplicationsMutationVariables>,
    deleteRenterApplications: MutationFunction<DeleteRenterApplicationsMutation, DeleteRenterApplicationsMutationVariables>,
    deleteReviews: MutationFunction<DeleteReviewsMutation, DeleteReviewsMutationVariables>,
    itemId: number
) {
    try {
        // Delete other data that references itemId
        await deleteStockStatuses({ variables: { itemId: Number(itemId) } });
        await deleteConversations({ variables: { itemId: Number(itemId) } });
        await deleteOwnerApplications({ variables: { itemId: Number(itemId) } });
        await deleteRenterApplications({ variables: { itemId: Number(itemId) } });
        await deleteReviews({ variables: { itemId: Number(itemId) } });

        // Delete an item at the end
        await deleteItem({ variables: { itemId: Number(itemId) } });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}