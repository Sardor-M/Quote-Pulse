/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateQuoteAppTestInput = {
  id?: string | null,
  queryName: string,
  quotesGenerated: number,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelQuoteAppTestConditionInput = {
  queryName?: ModelStringInput | null,
  quotesGenerated?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuoteAppTestConditionInput | null > | null,
  or?: Array< ModelQuoteAppTestConditionInput | null > | null,
  not?: ModelQuoteAppTestConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type quoteAppTest = {
  __typename: "quoteAppTest",
  id: string,
  queryName: string,
  quotesGenerated: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateQuoteAppTestInput = {
  id: string,
  queryName?: string | null,
  quotesGenerated?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteQuoteAppTestInput = {
  id: string,
};

export type ModelQuoteAppTestFilterInput = {
  id?: ModelIDInput | null,
  queryName?: ModelStringInput | null,
  quotesGenerated?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuoteAppTestFilterInput | null > | null,
  or?: Array< ModelQuoteAppTestFilterInput | null > | null,
  not?: ModelQuoteAppTestFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelQuoteAppTestConnection = {
  __typename: "ModelQuoteAppTestConnection",
  items:  Array<quoteAppTest | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelquoteAppTestFilterInput = {
  id?: ModelIDInput | null,
  queryName?: ModelStringInput | null,
  quotesGenerated?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelquoteAppTestFilterInput | null > | null,
  or?: Array< ModelquoteAppTestFilterInput | null > | null,
  not?: ModelquoteAppTestFilterInput | null,
};

export type ModelquoteAppTestConnection = {
  __typename: "ModelquoteAppTestConnection",
  items:  Array<quoteAppTest | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionQuoteAppTestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  queryName?: ModelSubscriptionStringInput | null,
  quotesGenerated?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionQuoteAppTestFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuoteAppTestFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateQuoteAppTestMutationVariables = {
  input: CreateQuoteAppTestInput,
  condition?: ModelQuoteAppTestConditionInput | null,
};

export type CreateQuoteAppTestMutation = {
  createQuoteAppTest?:  {
    __typename: "quoteAppTest",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuoteAppTestMutationVariables = {
  input: UpdateQuoteAppTestInput,
  condition?: ModelQuoteAppTestConditionInput | null,
};

export type UpdateQuoteAppTestMutation = {
  updateQuoteAppTest?:  {
    __typename: "quoteAppTest",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuoteAppTestMutationVariables = {
  input: DeleteQuoteAppTestInput,
  condition?: ModelQuoteAppTestConditionInput | null,
};

export type DeleteQuoteAppTestMutation = {
  deleteQuoteAppTest?:  {
    __typename: "quoteAppTest",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GenerateAQuoteQueryVariables = {
  input: string,
};

export type GenerateAQuoteQuery = {
  generateAQuote?: string | null,
};

export type GetQuoteAppTestQueryVariables = {
  id: string,
};

export type GetQuoteAppTestQuery = {
  getQuoteAppTest?:  {
    __typename: "quoteAppTest",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuoteAppTestsQueryVariables = {
  filter?: ModelQuoteAppTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuoteAppTestsQuery = {
  listQuoteAppTests?:  {
    __typename: "ModelQuoteAppTestConnection",
    items:  Array< {
      __typename: "quoteAppTest",
      id: string,
      queryName: string,
      quotesGenerated: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuoteQueryNameQueryVariables = {
  queryName: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelquoteAppTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuoteQueryNameQuery = {
  quoteQueryName?:  {
    __typename: "ModelquoteAppTestConnection",
    items:  Array< {
      __typename: "quoteAppTest",
      id: string,
      queryName: string,
      quotesGenerated: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateQuoteAppTestSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteAppTestFilterInput | null,
};

export type OnCreateQuoteAppTestSubscription = {
  onCreateQuoteAppTest?:  {
    __typename: "quoteAppTest",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuoteAppTestSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteAppTestFilterInput | null,
};

export type OnUpdateQuoteAppTestSubscription = {
  onUpdateQuoteAppTest?:  {
    __typename: "quoteAppTest",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuoteAppTestSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteAppTestFilterInput | null,
};

export type OnDeleteQuoteAppTestSubscription = {
  onDeleteQuoteAppTest?:  {
    __typename: "quoteAppTest",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
