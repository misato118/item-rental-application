/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: Date; output: Date; }
};

/** Owner application status for an item */
export enum ApplicationStatus {
  /** When an owner application is declined. */
  Declined = 'DECLINED',
  /** When an owner created an item but has not applied yet. */
  Draft = 'DRAFT',
  /** When an owner applied to publish an item. */
  Pending = 'PENDING',
  /** When an owner application is accepted and published */
  Published = 'PUBLISHED'
}

export type ChangeRenterAppStatusInput = {
  id: Scalars['Int']['input'];
  status: RenterApplicationStatusType;
};

export type Company = {
  __typename?: 'Company';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  employees?: Maybe<Array<Employee>>;
  id: Scalars['Int']['output'];
  items?: Maybe<Array<Item>>;
  logoURL?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateCompanyInput = {
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  logoURL: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateEmployeeInput = {
  birthDate: Scalars['DateTime']['input'];
  /** The name of a company this employee works for */
  company: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateFormInput = {
  itemId: Scalars['Int']['input'];
  offeringDuration: Scalars['Int']['input'];
  offeringPrice: Scalars['Float']['input'];
  renterId: Scalars['Int']['input'];
};

export type CreateItemInput = {
  category?: InputMaybe<ItemCategory>;
  company: Scalars['String']['input'];
  currentStock?: InputMaybe<Scalars['Int']['input']>;
  deposit?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fee?: InputMaybe<Scalars['Float']['input']>;
  feeType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imageURL?: InputMaybe<Scalars['String']['input']>;
  maxDuration?: InputMaybe<Scalars['Int']['input']>;
  maxDurationType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  totalStock?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateRenterInput = {
  birthDate?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  imageURL?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateReviewInput = {
  contents: Scalars['String']['input'];
  itemId: Scalars['Int']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CreateStockStatusInput = {
  currentStock: Scalars['Int']['input'];
  itemId: Scalars['Int']['input'];
  totalStock: Scalars['Int']['input'];
};

export type Employee = {
  __typename?: 'Employee';
  birthDate: Scalars['DateTime']['output'];
  company: Company;
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FilterItemInput = {
  durationType?: InputMaybe<Scalars['String']['input']>;
  maxDuration?: InputMaybe<Scalars['Int']['input']>;
  maxPrice?: InputMaybe<Scalars['Int']['input']>;
  priceType?: InputMaybe<Scalars['String']['input']>;
};

export type Form = {
  __typename?: 'Form';
  id: Scalars['Int']['output'];
  offeringDuration: Scalars['Int']['output'];
  offeringPrice: Scalars['Float']['output'];
  renterApplication: RenterApplication;
};

export type Item = {
  __typename?: 'Item';
  category?: Maybe<ItemCategory>;
  company: Company;
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deposit?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  feeType?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
  maxDuration?: Maybe<Scalars['Int']['output']>;
  maxDurationType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerApplication: OwnerApplication;
  renterApplications?: Maybe<Array<RenterApplication>>;
  reviews?: Maybe<Array<Review>>;
  stockStatus?: Maybe<StockStatus>;
  updatedAt: Scalars['DateTime']['output'];
};

/** The item types */
export enum ItemCategory {
  /** Any furniture. */
  Furniture = 'FURNITURE',
  /** Anything related to music such as instruments, scores, etc. */
  Music = 'MUSIC',
  /** Any tools. */
  Tool = 'TOOL'
}

export type LoginEmployeeInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type LoginRenterInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany: Company;
  createEmployee: Employee;
  createItem: Company;
  createRenter: Renter;
  createRenterApplication: RenterApplication;
  createReview: Item;
  createStockStatus: Item;
  deleteConversations: Scalars['Int']['output'];
  deleteItem: Item;
  deleteOwnerApplications: Scalars['Int']['output'];
  deleteRenterApplications: Scalars['Int']['output'];
  deleteReviews: Scalars['Int']['output'];
  deleteStockStatuses: Scalars['Int']['output'];
  saveAllRenterAppStatuses: Scalars['Boolean']['output'];
  submitItem: Item;
  updateItem: Item;
};


export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput;
};


export type MutationCreateEmployeeArgs = {
  createEmployeeInput: CreateEmployeeInput;
};


export type MutationCreateItemArgs = {
  createItemInput: CreateItemInput;
};


export type MutationCreateRenterArgs = {
  createRenterInput: CreateRenterInput;
};


export type MutationCreateRenterApplicationArgs = {
  createRenterApplicationInput: CreateFormInput;
};


export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput;
};


export type MutationCreateStockStatusArgs = {
  createStockStatusInput: CreateStockStatusInput;
};


export type MutationDeleteConversationsArgs = {
  itemId: Scalars['Int']['input'];
};


export type MutationDeleteItemArgs = {
  itemId: Scalars['Int']['input'];
};


export type MutationDeleteOwnerApplicationsArgs = {
  itemId: Scalars['Int']['input'];
};


export type MutationDeleteRenterApplicationsArgs = {
  itemId: Scalars['Int']['input'];
};


export type MutationDeleteReviewsArgs = {
  itemId: Scalars['Int']['input'];
};


export type MutationDeleteStockStatusesArgs = {
  itemId: Scalars['Int']['input'];
};


export type MutationSaveAllRenterAppStatusesArgs = {
  saveAllRenterAppStatusesInput: SaveAllRenterAppStatusesInput;
};


export type MutationSubmitItemArgs = {
  createItemInput: CreateItemInput;
};


export type MutationUpdateItemArgs = {
  createItemInput: CreateItemInput;
};

export type OwnerApplication = {
  __typename?: 'OwnerApplication';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  status: ApplicationStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
  companyInfo: Company;
  employeeId: Employee;
  employeeInfo: Employee;
  employees: Array<Employee>;
  itemByCompany: Company;
  itemCategories: Array<ItemCategory>;
  itemInfo?: Maybe<Item>;
  items: Array<Item>;
  ownerApplication: OwnerApplication;
  renterApplications: Array<RenterApplication>;
  renterId: Renter;
  renterInfo: Renter;
  renters: Array<Renter>;
  reviews: Array<Review>;
  stockStatus: StockStatus;
};


export type QueryCompanyInfoArgs = {
  companyName: Scalars['String']['input'];
};


export type QueryEmployeeIdArgs = {
  loginEmployeeInput: LoginEmployeeInput;
};


export type QueryEmployeeInfoArgs = {
  employeeId: Scalars['Int']['input'];
};


export type QueryItemByCompanyArgs = {
  companyName: Scalars['String']['input'];
};


export type QueryItemInfoArgs = {
  itemId: Scalars['Int']['input'];
};


export type QueryItemsArgs = {
  filter?: InputMaybe<FilterItemInput>;
};


export type QueryOwnerApplicationArgs = {
  itemId: Scalars['Int']['input'];
};


export type QueryRenterIdArgs = {
  loginRenterInput: LoginRenterInput;
};


export type QueryRenterInfoArgs = {
  renterId: Scalars['Int']['input'];
};


export type QueryStockStatusArgs = {
  itemId: Scalars['Int']['input'];
};

export type Renter = {
  __typename?: 'Renter';
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  renterApplications: Array<RenterApplication>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type RenterApplication = {
  __typename?: 'RenterApplication';
  createdAt: Scalars['DateTime']['output'];
  form?: Maybe<Form>;
  formId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  item?: Maybe<Item>;
  itemId: Scalars['Int']['output'];
  renter: Renter;
  renterApplicationStatuses?: Maybe<Array<RenterApplicationStatus>>;
  renterId: Scalars['Int']['output'];
};

export type RenterApplicationStatus = {
  __typename?: 'RenterApplicationStatus';
  id: Scalars['Int']['output'];
  renterApplication: RenterApplication;
  renterApplicationId: Scalars['Int']['output'];
  status: RenterApplicationStatusType;
  updatedAt: Scalars['DateTime']['output'];
};

/** Application status for a renter application */
export enum RenterApplicationStatusType {
  /** When a renter application is accepted. */
  Accepted = 'ACCEPTED',
  /** When a renter applied for an item. */
  Applied = 'APPLIED',
  /** When an item is returned to a company. */
  Completed = 'COMPLETED',
  /** When a renter application is declined. */
  Declined = 'DECLINED',
  /** When an item is delivered by a company. */
  Delivered = 'DELIVERED',
  /** When an item is arrived at a renter. */
  Rented = 'RENTED',
  /** When a renter returns an item back to a company. */
  Returned = 'RETURNED'
}

export type Review = {
  __typename?: 'Review';
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  item: Item;
  itemId: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SaveAllRenterAppStatusesInput = {
  appStatusArr: Array<ChangeRenterAppStatusInput>;
};

export type StockStatus = {
  __typename?: 'StockStatus';
  currentStock: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  item: Item;
  itemId: Scalars['Int']['output'];
  totalStock: Scalars['Int']['output'];
};

export type DeleteConversationsMutationVariables = Exact<{
  itemId: Scalars['Int']['input'];
}>;


export type DeleteConversationsMutation = { __typename?: 'Mutation', deleteConversations: number };

export type DeleteItemMutationVariables = Exact<{
  itemId: Scalars['Int']['input'];
}>;


export type DeleteItemMutation = { __typename?: 'Mutation', deleteItem: { __typename?: 'Item', id: number } };

export type DeleteOwnerApplicationsMutationVariables = Exact<{
  itemId: Scalars['Int']['input'];
}>;


export type DeleteOwnerApplicationsMutation = { __typename?: 'Mutation', deleteOwnerApplications: number };

export type DeleteRenterApplicationsMutationVariables = Exact<{
  itemId: Scalars['Int']['input'];
}>;


export type DeleteRenterApplicationsMutation = { __typename?: 'Mutation', deleteRenterApplications: number };

export type DeleteReviewsMutationVariables = Exact<{
  itemId: Scalars['Int']['input'];
}>;


export type DeleteReviewsMutation = { __typename?: 'Mutation', deleteReviews: number };

export type DeleteStockStatusesMutationVariables = Exact<{
  itemId: Scalars['Int']['input'];
}>;


export type DeleteStockStatusesMutation = { __typename?: 'Mutation', deleteStockStatuses: number };

export type GetApplicationFormQueryVariables = Exact<{
  itemId: Scalars['Int']['input'];
}>;


export type GetApplicationFormQuery = { __typename?: 'Query', itemInfo?: { __typename?: 'Item', id: number, name?: string | null, description?: string | null, createdAt: Date, category?: ItemCategory | null, fee?: number | null, feeType?: string | null, maxDuration?: number | null, maxDurationType?: string | null, imageURL?: string | null, deposit?: number | null, company: { __typename?: 'Company', name: string, logoURL?: string | null, description: string }, stockStatus?: { __typename?: 'StockStatus', totalStock: number, currentStock: number } | null } | null };

export type GetEmployeeIdQueryVariables = Exact<{
  loginEmployeeInput: LoginEmployeeInput;
}>;


export type GetEmployeeIdQuery = { __typename?: 'Query', employeeId: { __typename?: 'Employee', id: number, company: { __typename?: 'Company', id: number, name: string } } };

export type GetEmployeeInfoQueryVariables = Exact<{
  employeeId: Scalars['Int']['input'];
}>;


export type GetEmployeeInfoQuery = { __typename?: 'Query', employeeInfo: { __typename?: 'Employee', id: number, firstName: string, lastName: string, birthDate: Date, email: string, imageURL?: string | null, company: { __typename?: 'Company', id: number, name: string, items?: Array<{ __typename?: 'Item', id: number, name?: string | null, ownerApplication: { __typename?: 'OwnerApplication', id: number, status: ApplicationStatus, updatedAt: Date }, stockStatus?: { __typename?: 'StockStatus', totalStock: number, currentStock: number } | null }> | null } } };

export type GetItemCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemCategoriesQuery = { __typename?: 'Query', itemCategories: Array<ItemCategory> };

export type GetItemInfoQueryVariables = Exact<{
  itemId: Scalars['Int']['input'];
}>;


export type GetItemInfoQuery = { __typename?: 'Query', itemInfo?: { __typename?: 'Item', id: number, name?: string | null, description?: string | null, createdAt: Date, category?: ItemCategory | null, fee?: number | null, feeType?: string | null, maxDuration?: number | null, maxDurationType?: string | null, imageURL?: string | null, deposit?: number | null, company: { __typename?: 'Company', name: string, logoURL?: string | null, description: string }, reviews?: Array<{ __typename?: 'Review', title: string, contents: string, rating: number }> | null, ownerApplication: { __typename?: 'OwnerApplication', status: ApplicationStatus } } | null };

export type GetRenterApplicationListQueryVariables = Exact<{
  itemId: Scalars['Int']['input'];
}>;


export type GetRenterApplicationListQuery = { __typename?: 'Query', itemInfo?: { __typename?: 'Item', id: number, name?: string | null, feeType?: string | null, maxDurationType?: string | null, stockStatus?: { __typename?: 'StockStatus', totalStock: number, currentStock: number } | null, renterApplications?: Array<{ __typename?: 'RenterApplication', id: number, createdAt: Date, renter: { __typename?: 'Renter', id: number, username: string }, form?: { __typename?: 'Form', offeringPrice: number, offeringDuration: number } | null, renterApplicationStatuses?: Array<{ __typename?: 'RenterApplicationStatus', status: RenterApplicationStatusType, updatedAt: Date }> | null }> | null } | null };

export type SaveAllRenterAppStatusesMutationVariables = Exact<{
  saveAllRenterAppStatusesInput: SaveAllRenterAppStatusesInput;
}>;


export type SaveAllRenterAppStatusesMutation = { __typename?: 'Mutation', saveAllRenterAppStatuses: boolean };

export type SaveItemApplicationMutationVariables = Exact<{
  createItemInput: CreateItemInput;
}>;


export type SaveItemApplicationMutation = { __typename?: 'Mutation', updateItem: { __typename?: 'Item', id: number, name?: string | null, feeType?: string | null } };

export type SubmitItemApplicationMutationVariables = Exact<{
  createItemInput: CreateItemInput;
}>;


export type SubmitItemApplicationMutation = { __typename?: 'Mutation', submitItem: { __typename?: 'Item', id: number, name?: string | null, ownerApplication: { __typename?: 'OwnerApplication', id: number, status: ApplicationStatus, createdAt: Date, updatedAt: Date } } };


export const DeleteConversationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteConversations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteConversations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}]}]}}]} as unknown as DocumentNode<DeleteConversationsMutation, DeleteConversationsMutationVariables>;
export const DeleteItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteItemMutation, DeleteItemMutationVariables>;
export const DeleteOwnerApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteOwnerApplications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOwnerApplications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}]}]}}]} as unknown as DocumentNode<DeleteOwnerApplicationsMutation, DeleteOwnerApplicationsMutationVariables>;
export const DeleteRenterApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRenterApplications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRenterApplications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}]}]}}]} as unknown as DocumentNode<DeleteRenterApplicationsMutation, DeleteRenterApplicationsMutationVariables>;
export const DeleteReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteReviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteReviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}]}]}}]} as unknown as DocumentNode<DeleteReviewsMutation, DeleteReviewsMutationVariables>;
export const DeleteStockStatusesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteStockStatuses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteStockStatuses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}]}]}}]} as unknown as DocumentNode<DeleteStockStatusesMutation, DeleteStockStatusesMutationVariables>;
export const GetApplicationFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetApplicationForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeType"}},{"kind":"Field","name":{"kind":"Name","value":"maxDuration"}},{"kind":"Field","name":{"kind":"Name","value":"maxDurationType"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"deposit"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logoURL"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStock"}},{"kind":"Field","name":{"kind":"Name","value":"currentStock"}}]}}]}}]}}]} as unknown as DocumentNode<GetApplicationFormQuery, GetApplicationFormQueryVariables>;
export const GetEmployeeIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginEmployeeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginEmployeeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employeeId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginEmployeeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginEmployeeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeIdQuery, GetEmployeeIdQueryVariables>;
export const GetEmployeeInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employeeInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"employeeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ownerApplication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStock"}},{"kind":"Field","name":{"kind":"Name","value":"currentStock"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeInfoQuery, GetEmployeeInfoQueryVariables>;
export const GetItemCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItemCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCategories"}}]}}]} as unknown as DocumentNode<GetItemCategoriesQuery, GetItemCategoriesQueryVariables>;
export const GetItemInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItemInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeType"}},{"kind":"Field","name":{"kind":"Name","value":"maxDuration"}},{"kind":"Field","name":{"kind":"Name","value":"maxDurationType"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"deposit"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logoURL"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownerApplication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetItemInfoQuery, GetItemInfoQueryVariables>;
export const GetRenterApplicationListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRenterApplicationList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"feeType"}},{"kind":"Field","name":{"kind":"Name","value":"maxDurationType"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStock"}},{"kind":"Field","name":{"kind":"Name","value":"currentStock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"renterApplications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"renter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"offeringPrice"}},{"kind":"Field","name":{"kind":"Name","value":"offeringDuration"}}]}},{"kind":"Field","name":{"kind":"Name","value":"renterApplicationStatuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRenterApplicationListQuery, GetRenterApplicationListQueryVariables>;
export const SaveAllRenterAppStatusesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveAllRenterAppStatuses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"saveAllRenterAppStatusesInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SaveAllRenterAppStatusesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveAllRenterAppStatuses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"saveAllRenterAppStatusesInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"saveAllRenterAppStatusesInput"}}}]}]}}]} as unknown as DocumentNode<SaveAllRenterAppStatusesMutation, SaveAllRenterAppStatusesMutationVariables>;
export const SaveItemApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveItemApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createItemInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createItemInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createItemInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"feeType"}}]}}]}}]} as unknown as DocumentNode<SaveItemApplicationMutation, SaveItemApplicationMutationVariables>;
export const SubmitItemApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitItemApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createItemInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createItemInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createItemInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ownerApplication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<SubmitItemApplicationMutation, SubmitItemApplicationMutationVariables>;