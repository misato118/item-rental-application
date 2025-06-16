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
    "mutation CreateRenter($createRenterInput: CreateRenterInput!) {\n  createRenter(createRenterInput: $createRenterInput) {\n    id\n  }\n}": typeof types.CreateRenterDocument,
    "mutation CreateRenterApplication($createRenterApplicationInput: CreateFormInput!) {\n  createRenterApplication(\n    createRenterApplicationInput: $createRenterApplicationInput\n  ) {\n    id\n    createdAt\n    form {\n      id\n      offeringPrice\n      offeringDuration\n    }\n    renterApplicationStatuses {\n      id\n      status\n      updatedAt\n    }\n    item {\n      id\n    }\n  }\n}": typeof types.CreateRenterApplicationDocument,
    "query FindRenterApplications($canApplyInput: FindApplicationInput!) {\n  canApply(canApplyInput: $canApplyInput)\n}": typeof types.FindRenterApplicationsDocument,
    "query GetAllItems($filter: FilterItemInput) {\n  items(filter: $filter) {\n    id\n    name\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n  }\n}": typeof types.GetAllItemsDocument,
    "query GetCompanyInfo($companyName: String!) {\n  companyInfo(companyName: $companyName) {\n    id\n    name\n    description\n    createdAt\n    logoURL\n    items {\n      id\n      name\n      fee\n      feeType\n      imageURL\n    }\n  }\n}": typeof types.GetCompanyInfoDocument,
    "query GetItemInfo($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    description\n    createdAt\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n    deposit\n    company {\n      name\n      logoURL\n      description\n    }\n    reviews {\n      id\n      title\n      contents\n      rating\n    }\n  }\n}": typeof types.GetItemInfoDocument,
    "query GetRenterId($loginRenterInput: LoginRenterInput!) {\n  renterId(loginRenterInput: $loginRenterInput) {\n    id\n  }\n}": typeof types.GetRenterIdDocument,
    "query GetRenterInfo($renterId: Int!) {\n  renterInfo(renterId: $renterId) {\n    id\n    username\n    firstName\n    lastName\n    birthDate\n    email\n    createdAt\n    updatedAt\n    imageURL\n    renterApplications {\n      id\n      form {\n        id\n        offeringPrice\n        offeringDuration\n      }\n      renterApplicationStatuses {\n        id\n        status\n        updatedAt\n      }\n      item {\n        id\n        name\n        fee\n        feeType\n        maxDuration\n        maxDurationType\n        company {\n          name\n        }\n      }\n    }\n  }\n}": typeof types.GetRenterInfoDocument,
    "mutation ChangeRenterAppStatus($changeRenterAppStatusInput: ChangeRenterAppStatusInput!) {\n  changeRenterAppStatus(changeRenterAppStatusInput: $changeRenterAppStatusInput)\n}": typeof types.ChangeRenterAppStatusDocument,
};
const documents: Documents = {
    "mutation CreateRenter($createRenterInput: CreateRenterInput!) {\n  createRenter(createRenterInput: $createRenterInput) {\n    id\n  }\n}": types.CreateRenterDocument,
    "mutation CreateRenterApplication($createRenterApplicationInput: CreateFormInput!) {\n  createRenterApplication(\n    createRenterApplicationInput: $createRenterApplicationInput\n  ) {\n    id\n    createdAt\n    form {\n      id\n      offeringPrice\n      offeringDuration\n    }\n    renterApplicationStatuses {\n      id\n      status\n      updatedAt\n    }\n    item {\n      id\n    }\n  }\n}": types.CreateRenterApplicationDocument,
    "query FindRenterApplications($canApplyInput: FindApplicationInput!) {\n  canApply(canApplyInput: $canApplyInput)\n}": types.FindRenterApplicationsDocument,
    "query GetAllItems($filter: FilterItemInput) {\n  items(filter: $filter) {\n    id\n    name\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n  }\n}": types.GetAllItemsDocument,
    "query GetCompanyInfo($companyName: String!) {\n  companyInfo(companyName: $companyName) {\n    id\n    name\n    description\n    createdAt\n    logoURL\n    items {\n      id\n      name\n      fee\n      feeType\n      imageURL\n    }\n  }\n}": types.GetCompanyInfoDocument,
    "query GetItemInfo($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    description\n    createdAt\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n    deposit\n    company {\n      name\n      logoURL\n      description\n    }\n    reviews {\n      id\n      title\n      contents\n      rating\n    }\n  }\n}": types.GetItemInfoDocument,
    "query GetRenterId($loginRenterInput: LoginRenterInput!) {\n  renterId(loginRenterInput: $loginRenterInput) {\n    id\n  }\n}": types.GetRenterIdDocument,
    "query GetRenterInfo($renterId: Int!) {\n  renterInfo(renterId: $renterId) {\n    id\n    username\n    firstName\n    lastName\n    birthDate\n    email\n    createdAt\n    updatedAt\n    imageURL\n    renterApplications {\n      id\n      form {\n        id\n        offeringPrice\n        offeringDuration\n      }\n      renterApplicationStatuses {\n        id\n        status\n        updatedAt\n      }\n      item {\n        id\n        name\n        fee\n        feeType\n        maxDuration\n        maxDurationType\n        company {\n          name\n        }\n      }\n    }\n  }\n}": types.GetRenterInfoDocument,
    "mutation ChangeRenterAppStatus($changeRenterAppStatusInput: ChangeRenterAppStatusInput!) {\n  changeRenterAppStatus(changeRenterAppStatusInput: $changeRenterAppStatusInput)\n}": types.ChangeRenterAppStatusDocument,
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
export function graphql(source: "mutation CreateRenter($createRenterInput: CreateRenterInput!) {\n  createRenter(createRenterInput: $createRenterInput) {\n    id\n  }\n}"): (typeof documents)["mutation CreateRenter($createRenterInput: CreateRenterInput!) {\n  createRenter(createRenterInput: $createRenterInput) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateRenterApplication($createRenterApplicationInput: CreateFormInput!) {\n  createRenterApplication(\n    createRenterApplicationInput: $createRenterApplicationInput\n  ) {\n    id\n    createdAt\n    form {\n      id\n      offeringPrice\n      offeringDuration\n    }\n    renterApplicationStatuses {\n      id\n      status\n      updatedAt\n    }\n    item {\n      id\n    }\n  }\n}"): (typeof documents)["mutation CreateRenterApplication($createRenterApplicationInput: CreateFormInput!) {\n  createRenterApplication(\n    createRenterApplicationInput: $createRenterApplicationInput\n  ) {\n    id\n    createdAt\n    form {\n      id\n      offeringPrice\n      offeringDuration\n    }\n    renterApplicationStatuses {\n      id\n      status\n      updatedAt\n    }\n    item {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindRenterApplications($canApplyInput: FindApplicationInput!) {\n  canApply(canApplyInput: $canApplyInput)\n}"): (typeof documents)["query FindRenterApplications($canApplyInput: FindApplicationInput!) {\n  canApply(canApplyInput: $canApplyInput)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllItems($filter: FilterItemInput) {\n  items(filter: $filter) {\n    id\n    name\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n  }\n}"): (typeof documents)["query GetAllItems($filter: FilterItemInput) {\n  items(filter: $filter) {\n    id\n    name\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCompanyInfo($companyName: String!) {\n  companyInfo(companyName: $companyName) {\n    id\n    name\n    description\n    createdAt\n    logoURL\n    items {\n      id\n      name\n      fee\n      feeType\n      imageURL\n    }\n  }\n}"): (typeof documents)["query GetCompanyInfo($companyName: String!) {\n  companyInfo(companyName: $companyName) {\n    id\n    name\n    description\n    createdAt\n    logoURL\n    items {\n      id\n      name\n      fee\n      feeType\n      imageURL\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetItemInfo($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    description\n    createdAt\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n    deposit\n    company {\n      name\n      logoURL\n      description\n    }\n    reviews {\n      id\n      title\n      contents\n      rating\n    }\n  }\n}"): (typeof documents)["query GetItemInfo($itemId: Int!) {\n  itemInfo(itemId: $itemId) {\n    id\n    name\n    description\n    createdAt\n    category\n    fee\n    feeType\n    maxDuration\n    maxDurationType\n    imageURL\n    deposit\n    company {\n      name\n      logoURL\n      description\n    }\n    reviews {\n      id\n      title\n      contents\n      rating\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRenterId($loginRenterInput: LoginRenterInput!) {\n  renterId(loginRenterInput: $loginRenterInput) {\n    id\n  }\n}"): (typeof documents)["query GetRenterId($loginRenterInput: LoginRenterInput!) {\n  renterId(loginRenterInput: $loginRenterInput) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRenterInfo($renterId: Int!) {\n  renterInfo(renterId: $renterId) {\n    id\n    username\n    firstName\n    lastName\n    birthDate\n    email\n    createdAt\n    updatedAt\n    imageURL\n    renterApplications {\n      id\n      form {\n        id\n        offeringPrice\n        offeringDuration\n      }\n      renterApplicationStatuses {\n        id\n        status\n        updatedAt\n      }\n      item {\n        id\n        name\n        fee\n        feeType\n        maxDuration\n        maxDurationType\n        company {\n          name\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetRenterInfo($renterId: Int!) {\n  renterInfo(renterId: $renterId) {\n    id\n    username\n    firstName\n    lastName\n    birthDate\n    email\n    createdAt\n    updatedAt\n    imageURL\n    renterApplications {\n      id\n      form {\n        id\n        offeringPrice\n        offeringDuration\n      }\n      renterApplicationStatuses {\n        id\n        status\n        updatedAt\n      }\n      item {\n        id\n        name\n        fee\n        feeType\n        maxDuration\n        maxDurationType\n        company {\n          name\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ChangeRenterAppStatus($changeRenterAppStatusInput: ChangeRenterAppStatusInput!) {\n  changeRenterAppStatus(changeRenterAppStatusInput: $changeRenterAppStatusInput)\n}"): (typeof documents)["mutation ChangeRenterAppStatus($changeRenterAppStatusInput: ChangeRenterAppStatusInput!) {\n  changeRenterAppStatus(changeRenterAppStatusInput: $changeRenterAppStatusInput)\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;