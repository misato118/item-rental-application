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

export type FindApplicationInput = {
  renterApplicationId: Scalars['Int']['input'];
  renterId: Scalars['Int']['input'];
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
  changeRenterAppStatus: Scalars['Boolean']['output'];
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


export type MutationChangeRenterAppStatusArgs = {
  changeRenterAppStatusInput: ChangeRenterAppStatusInput;
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
  canApply: Scalars['Boolean']['output'];
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


export type QueryCanApplyArgs = {
  canApplyInput: FindApplicationInput;
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

export type CreateRenterMutationVariables = Exact<{
  createRenterInput: CreateRenterInput;
}>;


export type CreateRenterMutation = { __typename?: 'Mutation', createRenter: { __typename?: 'Renter', id: number } };

export type CreateRenterApplicationMutationVariables = Exact<{
  createRenterApplicationInput: CreateFormInput;
}>;


export type CreateRenterApplicationMutation = { __typename?: 'Mutation', createRenterApplication: { __typename?: 'RenterApplication', id: number, createdAt: Date, form?: { __typename?: 'Form', id: number, offeringPrice: number, offeringDuration: number } | null, renterApplicationStatuses?: Array<{ __typename?: 'RenterApplicationStatus', id: number, status: RenterApplicationStatusType, updatedAt: Date }> | null, item?: { __typename?: 'Item', id: number } | null } };

export type FindRenterApplicationsQueryVariables = Exact<{
  canApplyInput: FindApplicationInput;
}>;


export type FindRenterApplicationsQuery = { __typename?: 'Query', canApply: boolean };

export type GetAllItemsQueryVariables = Exact<{
  filter?: InputMaybe<FilterItemInput>;
}>;


export type GetAllItemsQuery = { __typename?: 'Query', items: Array<{ __typename?: 'Item', id: number, name?: string | null, category?: ItemCategory | null, fee?: number | null, feeType?: string | null, maxDuration?: number | null, maxDurationType?: string | null, imageURL?: string | null }> };

export type GetCompanyInfoQueryVariables = Exact<{
  companyName: Scalars['String']['input'];
}>;


export type GetCompanyInfoQuery = { __typename?: 'Query', companyInfo: { __typename?: 'Company', id: number, name: string, description: string, createdAt: Date, logoURL?: string | null, items?: Array<{ __typename?: 'Item', id: number, name?: string | null, fee?: number | null, feeType?: string | null, imageURL?: string | null }> | null } };

export type GetItemInfoQueryVariables = Exact<{
  itemId: Scalars['Int']['input'];
}>;


export type GetItemInfoQuery = { __typename?: 'Query', itemInfo?: { __typename?: 'Item', id: number, name?: string | null, description?: string | null, createdAt: Date, category?: ItemCategory | null, fee?: number | null, feeType?: string | null, maxDuration?: number | null, maxDurationType?: string | null, imageURL?: string | null, deposit?: number | null, company: { __typename?: 'Company', name: string, logoURL?: string | null, description: string }, reviews?: Array<{ __typename?: 'Review', id: number, title: string, contents: string, rating: number }> | null } | null };

export type GetRenterIdQueryVariables = Exact<{
  loginRenterInput: LoginRenterInput;
}>;


export type GetRenterIdQuery = { __typename?: 'Query', renterId: { __typename?: 'Renter', id: number } };

export type GetRenterInfoQueryVariables = Exact<{
  renterId: Scalars['Int']['input'];
}>;


export type GetRenterInfoQuery = { __typename?: 'Query', renterInfo: { __typename?: 'Renter', id: number, username: string, firstName: string, lastName: string, birthDate?: Date | null, email: string, createdAt: Date, updatedAt: Date, imageURL?: string | null, renterApplications: Array<{ __typename?: 'RenterApplication', id: number, form?: { __typename?: 'Form', id: number, offeringPrice: number, offeringDuration: number } | null, renterApplicationStatuses?: Array<{ __typename?: 'RenterApplicationStatus', id: number, status: RenterApplicationStatusType, updatedAt: Date }> | null, item?: { __typename?: 'Item', id: number, name?: string | null, fee?: number | null, feeType?: string | null, maxDuration?: number | null, maxDurationType?: string | null, company: { __typename?: 'Company', name: string } } | null }> } };

export type ChangeRenterAppStatusMutationVariables = Exact<{
  changeRenterAppStatusInput: ChangeRenterAppStatusInput;
}>;


export type ChangeRenterAppStatusMutation = { __typename?: 'Mutation', changeRenterAppStatus: boolean };


export const CreateRenterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRenter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createRenterInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRenterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRenter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createRenterInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createRenterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateRenterMutation, CreateRenterMutationVariables>;
export const CreateRenterApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRenterApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createRenterApplicationInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFormInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRenterApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createRenterApplicationInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createRenterApplicationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"offeringPrice"}},{"kind":"Field","name":{"kind":"Name","value":"offeringDuration"}}]}},{"kind":"Field","name":{"kind":"Name","value":"renterApplicationStatuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRenterApplicationMutation, CreateRenterApplicationMutationVariables>;
export const FindRenterApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindRenterApplications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"canApplyInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindApplicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canApply"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"canApplyInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"canApplyInput"}}}]}]}}]} as unknown as DocumentNode<FindRenterApplicationsQuery, FindRenterApplicationsQueryVariables>;
export const GetAllItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterItemInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeType"}},{"kind":"Field","name":{"kind":"Name","value":"maxDuration"}},{"kind":"Field","name":{"kind":"Name","value":"maxDurationType"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}}]}}]}}]} as unknown as DocumentNode<GetAllItemsQuery, GetAllItemsQueryVariables>;
export const GetCompanyInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanyInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"logoURL"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeType"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}}]}}]}}]}}]} as unknown as DocumentNode<GetCompanyInfoQuery, GetCompanyInfoQueryVariables>;
export const GetItemInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItemInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeType"}},{"kind":"Field","name":{"kind":"Name","value":"maxDuration"}},{"kind":"Field","name":{"kind":"Name","value":"maxDurationType"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"deposit"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logoURL"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]}}]} as unknown as DocumentNode<GetItemInfoQuery, GetItemInfoQueryVariables>;
export const GetRenterIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRenterId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginRenterInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginRenterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"renterId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginRenterInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginRenterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetRenterIdQuery, GetRenterIdQueryVariables>;
export const GetRenterInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRenterInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"renterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"renterInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"renterId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"renterId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"renterApplications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"form"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"offeringPrice"}},{"kind":"Field","name":{"kind":"Name","value":"offeringDuration"}}]}},{"kind":"Field","name":{"kind":"Name","value":"renterApplicationStatuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeType"}},{"kind":"Field","name":{"kind":"Name","value":"maxDuration"}},{"kind":"Field","name":{"kind":"Name","value":"maxDurationType"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRenterInfoQuery, GetRenterInfoQueryVariables>;
export const ChangeRenterAppStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeRenterAppStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"changeRenterAppStatusInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeRenterAppStatusInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeRenterAppStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"changeRenterAppStatusInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"changeRenterAppStatusInput"}}}]}]}}]} as unknown as DocumentNode<ChangeRenterAppStatusMutation, ChangeRenterAppStatusMutationVariables>;