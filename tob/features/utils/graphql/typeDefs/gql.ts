/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation DeleteConversations($itemId: Int!) {\n  deleteConversations(itemId: $itemId)\n}": typeof types.DeleteConversationsDocument,
    "mutation DeleteItem($itemId: Int!) {\n  deleteItem(itemId: $itemId) {\n    id\n  }\n}": typeof types.DeleteItemDocument,
    "mutation DeleteOwnerApplications($itemId: Int!) {\n  deleteOwnerApplications(itemId: $itemId)\n}": typeof types.DeleteOwnerApplicationsDocument,
    "mutation DeleteRenterApplications($itemId: Int!) {\n  deleteRenterApplications(itemId: $itemId)\n}": typeof types.DeleteRenterApplicationsDocument,
    "mutation DeleteReviews($itemId: Int!) {\n  deleteReviews(itemId: $itemId)\n}": typeof types.DeleteReviewsDocument,
    "mutation DeleteStockStatuses($itemId: Int!) {\n  deleteStockStatuses(itemId: $itemId)\n}": typeof types.DeleteStockStatusesDocument,
    "query GetApplicationForm($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    description\n    createdAt\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n    deposit\n    company {\n      name\n      logoURL\n      description\n    }\n    stockStatus {\n      totalStock\n      currentStock\n    }\n  }\n}": typeof types.GetApplicationFormDocument,
    "query GetEmployeeId($loginEmployeeInput: LoginEmployeeInput!) {\n  employeeId(loginEmployeeInput: $loginEmployeeInput) {\n    id\n    company {\n      id\n      name\n    }\n  }\n}": typeof types.GetEmployeeIdDocument,
    "query GetEmployeeInfo($employeeId: Int!) {\n  employeeInfo(employeeId: $employeeId) {\n    id\n    firstName\n    lastName\n    birthDate\n    email\n    imageURL\n    company {\n      id\n      name\n      items {\n        id\n        name\n        ownerApplication {\n          id\n          status\n          updatedAt\n        }\n        stockStatus {\n          totalStock\n          currentStock\n        }\n      }\n    }\n  }\n}": typeof types.GetEmployeeInfoDocument,
    "query GetItemCategories {\n  itemCategories\n}": typeof types.GetItemCategoriesDocument,
    "query GetItemInfo($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    description\n    createdAt\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n    deposit\n    company {\n      name\n      logoURL\n      description\n    }\n    reviews {\n      title\n      contents\n      rating\n    }\n    ownerApplication {\n      status\n    }\n  }\n}": typeof types.GetItemInfoDocument,
    "query GetRenterApplicationList($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    feeType\n    maxDurationType\n    stockStatus {\n      totalStock\n      currentStock\n    }\n    renterApplications {\n      id\n      createdAt\n      renter {\n        id\n        username\n      }\n      form {\n        offeringPrice\n        offeringDuration\n      }\n      renterApplicationStatuses {\n        status\n        updatedAt\n      }\n    }\n  }\n}": typeof types.GetRenterApplicationListDocument,
    "mutation saveAllRenterAppStatuses($saveAllRenterAppStatusesInput: SaveAllRenterAppStatusesInput!) {\n  saveAllRenterAppStatuses(\n    saveAllRenterAppStatusesInput: $saveAllRenterAppStatusesInput\n  )\n}": typeof types.SaveAllRenterAppStatusesDocument,
    "mutation SaveItemApplication($createItemInput: CreateItemInput!) {\n  updateItem(createItemInput: $createItemInput) {\n    id\n    name\n    feeType\n  }\n}": typeof types.SaveItemApplicationDocument,
    "mutation SubmitItemApplication($createItemInput: CreateItemInput!) {\n  submitItem(createItemInput: $createItemInput) {\n    id\n    name\n    ownerApplication {\n      id\n      status\n      createdAt\n      updatedAt\n    }\n  }\n}": typeof types.SubmitItemApplicationDocument,
};
const documents: Documents = {
    "mutation DeleteConversations($itemId: Int!) {\n  deleteConversations(itemId: $itemId)\n}": types.DeleteConversationsDocument,
    "mutation DeleteItem($itemId: Int!) {\n  deleteItem(itemId: $itemId) {\n    id\n  }\n}": types.DeleteItemDocument,
    "mutation DeleteOwnerApplications($itemId: Int!) {\n  deleteOwnerApplications(itemId: $itemId)\n}": types.DeleteOwnerApplicationsDocument,
    "mutation DeleteRenterApplications($itemId: Int!) {\n  deleteRenterApplications(itemId: $itemId)\n}": types.DeleteRenterApplicationsDocument,
    "mutation DeleteReviews($itemId: Int!) {\n  deleteReviews(itemId: $itemId)\n}": types.DeleteReviewsDocument,
    "mutation DeleteStockStatuses($itemId: Int!) {\n  deleteStockStatuses(itemId: $itemId)\n}": types.DeleteStockStatusesDocument,
    "query GetApplicationForm($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    description\n    createdAt\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n    deposit\n    company {\n      name\n      logoURL\n      description\n    }\n    stockStatus {\n      totalStock\n      currentStock\n    }\n  }\n}": types.GetApplicationFormDocument,
    "query GetEmployeeId($loginEmployeeInput: LoginEmployeeInput!) {\n  employeeId(loginEmployeeInput: $loginEmployeeInput) {\n    id\n    company {\n      id\n      name\n    }\n  }\n}": types.GetEmployeeIdDocument,
    "query GetEmployeeInfo($employeeId: Int!) {\n  employeeInfo(employeeId: $employeeId) {\n    id\n    firstName\n    lastName\n    birthDate\n    email\n    imageURL\n    company {\n      id\n      name\n      items {\n        id\n        name\n        ownerApplication {\n          id\n          status\n          updatedAt\n        }\n        stockStatus {\n          totalStock\n          currentStock\n        }\n      }\n    }\n  }\n}": types.GetEmployeeInfoDocument,
    "query GetItemCategories {\n  itemCategories\n}": types.GetItemCategoriesDocument,
    "query GetItemInfo($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    description\n    createdAt\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n    deposit\n    company {\n      name\n      logoURL\n      description\n    }\n    reviews {\n      title\n      contents\n      rating\n    }\n    ownerApplication {\n      status\n    }\n  }\n}": types.GetItemInfoDocument,
    "query GetRenterApplicationList($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    feeType\n    maxDurationType\n    stockStatus {\n      totalStock\n      currentStock\n    }\n    renterApplications {\n      id\n      createdAt\n      renter {\n        id\n        username\n      }\n      form {\n        offeringPrice\n        offeringDuration\n      }\n      renterApplicationStatuses {\n        status\n        updatedAt\n      }\n    }\n  }\n}": types.GetRenterApplicationListDocument,
    "mutation saveAllRenterAppStatuses($saveAllRenterAppStatusesInput: SaveAllRenterAppStatusesInput!) {\n  saveAllRenterAppStatuses(\n    saveAllRenterAppStatusesInput: $saveAllRenterAppStatusesInput\n  )\n}": types.SaveAllRenterAppStatusesDocument,
    "mutation SaveItemApplication($createItemInput: CreateItemInput!) {\n  updateItem(createItemInput: $createItemInput) {\n    id\n    name\n    feeType\n  }\n}": types.SaveItemApplicationDocument,
    "mutation SubmitItemApplication($createItemInput: CreateItemInput!) {\n  submitItem(createItemInput: $createItemInput) {\n    id\n    name\n    ownerApplication {\n      id\n      status\n      createdAt\n      updatedAt\n    }\n  }\n}": types.SubmitItemApplicationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteConversations($itemId: Int!) {\n  deleteConversations(itemId: $itemId)\n}"): (typeof documents)["mutation DeleteConversations($itemId: Int!) {\n  deleteConversations(itemId: $itemId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteItem($itemId: Int!) {\n  deleteItem(itemId: $itemId) {\n    id\n  }\n}"): (typeof documents)["mutation DeleteItem($itemId: Int!) {\n  deleteItem(itemId: $itemId) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteOwnerApplications($itemId: Int!) {\n  deleteOwnerApplications(itemId: $itemId)\n}"): (typeof documents)["mutation DeleteOwnerApplications($itemId: Int!) {\n  deleteOwnerApplications(itemId: $itemId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteRenterApplications($itemId: Int!) {\n  deleteRenterApplications(itemId: $itemId)\n}"): (typeof documents)["mutation DeleteRenterApplications($itemId: Int!) {\n  deleteRenterApplications(itemId: $itemId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteReviews($itemId: Int!) {\n  deleteReviews(itemId: $itemId)\n}"): (typeof documents)["mutation DeleteReviews($itemId: Int!) {\n  deleteReviews(itemId: $itemId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteStockStatuses($itemId: Int!) {\n  deleteStockStatuses(itemId: $itemId)\n}"): (typeof documents)["mutation DeleteStockStatuses($itemId: Int!) {\n  deleteStockStatuses(itemId: $itemId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetApplicationForm($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    description\n    createdAt\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n    deposit\n    company {\n      name\n      logoURL\n      description\n    }\n    stockStatus {\n      totalStock\n      currentStock\n    }\n  }\n}"): (typeof documents)["query GetApplicationForm($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    description\n    createdAt\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n    deposit\n    company {\n      name\n      logoURL\n      description\n    }\n    stockStatus {\n      totalStock\n      currentStock\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetEmployeeId($loginEmployeeInput: LoginEmployeeInput!) {\n  employeeId(loginEmployeeInput: $loginEmployeeInput) {\n    id\n    company {\n      id\n      name\n    }\n  }\n}"): (typeof documents)["query GetEmployeeId($loginEmployeeInput: LoginEmployeeInput!) {\n  employeeId(loginEmployeeInput: $loginEmployeeInput) {\n    id\n    company {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetEmployeeInfo($employeeId: Int!) {\n  employeeInfo(employeeId: $employeeId) {\n    id\n    firstName\n    lastName\n    birthDate\n    email\n    imageURL\n    company {\n      id\n      name\n      items {\n        id\n        name\n        ownerApplication {\n          id\n          status\n          updatedAt\n        }\n        stockStatus {\n          totalStock\n          currentStock\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetEmployeeInfo($employeeId: Int!) {\n  employeeInfo(employeeId: $employeeId) {\n    id\n    firstName\n    lastName\n    birthDate\n    email\n    imageURL\n    company {\n      id\n      name\n      items {\n        id\n        name\n        ownerApplication {\n          id\n          status\n          updatedAt\n        }\n        stockStatus {\n          totalStock\n          currentStock\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetItemCategories {\n  itemCategories\n}"): (typeof documents)["query GetItemCategories {\n  itemCategories\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetItemInfo($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    description\n    createdAt\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n    deposit\n    company {\n      name\n      logoURL\n      description\n    }\n    reviews {\n      title\n      contents\n      rating\n    }\n    ownerApplication {\n      status\n    }\n  }\n}"): (typeof documents)["query GetItemInfo($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    description\n    createdAt\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n    deposit\n    company {\n      name\n      logoURL\n      description\n    }\n    reviews {\n      title\n      contents\n      rating\n    }\n    ownerApplication {\n      status\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRenterApplicationList($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    feeType\n    maxDurationType\n    stockStatus {\n      totalStock\n      currentStock\n    }\n    renterApplications {\n      id\n      createdAt\n      renter {\n        id\n        username\n      }\n      form {\n        offeringPrice\n        offeringDuration\n      }\n      renterApplicationStatuses {\n        status\n        updatedAt\n      }\n    }\n  }\n}"): (typeof documents)["query GetRenterApplicationList($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    feeType\n    maxDurationType\n    stockStatus {\n      totalStock\n      currentStock\n    }\n    renterApplications {\n      id\n      createdAt\n      renter {\n        id\n        username\n      }\n      form {\n        offeringPrice\n        offeringDuration\n      }\n      renterApplicationStatuses {\n        status\n        updatedAt\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation saveAllRenterAppStatuses($saveAllRenterAppStatusesInput: SaveAllRenterAppStatusesInput!) {\n  saveAllRenterAppStatuses(\n    saveAllRenterAppStatusesInput: $saveAllRenterAppStatusesInput\n  )\n}"): (typeof documents)["mutation saveAllRenterAppStatuses($saveAllRenterAppStatusesInput: SaveAllRenterAppStatusesInput!) {\n  saveAllRenterAppStatuses(\n    saveAllRenterAppStatusesInput: $saveAllRenterAppStatusesInput\n  )\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SaveItemApplication($createItemInput: CreateItemInput!) {\n  updateItem(createItemInput: $createItemInput) {\n    id\n    name\n    feeType\n  }\n}"): (typeof documents)["mutation SaveItemApplication($createItemInput: CreateItemInput!) {\n  updateItem(createItemInput: $createItemInput) {\n    id\n    name\n    feeType\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SubmitItemApplication($createItemInput: CreateItemInput!) {\n  submitItem(createItemInput: $createItemInput) {\n    id\n    name\n    ownerApplication {\n      id\n      status\n      createdAt\n      updatedAt\n    }\n  }\n}"): (typeof documents)["mutation SubmitItemApplication($createItemInput: CreateItemInput!) {\n  submitItem(createItemInput: $createItemInput) {\n    id\n    name\n    ownerApplication {\n      id\n      status\n      createdAt\n      updatedAt\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;