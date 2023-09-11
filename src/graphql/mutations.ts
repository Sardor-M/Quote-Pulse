/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuoteAppTest = /* GraphQL */ `
  mutation CreateQuoteAppTest(
    $input: CreateQuoteAppTestInput!
    $condition: ModelQuoteAppTestConditionInput
  ) {
    createQuoteAppTest(input: $input, condition: $condition) {
      id
      queryName
      quotesGenerated
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateQuoteAppTest = /* GraphQL */ `
  mutation UpdateQuoteAppTest(
    $input: UpdateQuoteAppTestInput!
    $condition: ModelQuoteAppTestConditionInput
  ) {
    updateQuoteAppTest(input: $input, condition: $condition) {
      id
      queryName
      quotesGenerated
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteQuoteAppTest = /* GraphQL */ `
  mutation DeleteQuoteAppTest(
    $input: DeleteQuoteAppTestInput!
    $condition: ModelQuoteAppTestConditionInput
  ) {
    deleteQuoteAppTest(input: $input, condition: $condition) {
      id
      queryName
      quotesGenerated
      createdAt
      updatedAt
      __typename
    }
  }
`;
