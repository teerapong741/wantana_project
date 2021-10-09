import { gql } from 'apollo-angular';

export const CREATE_CUSTOMER = gql`
  mutation createCustomer($createCustomerInput: CreateCustomerInput!) {
    createCustomer(createCustomerInput: $createCustomerInput) {
      id
      firstName
      lastName
    }
  }
`;


