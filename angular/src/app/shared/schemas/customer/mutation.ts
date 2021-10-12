import { gql } from 'apollo-angular';

export const CREATE_CUSTOMER = gql`
  mutation createCustomer($createCustomerInput: CreateCustomerInput!) {
    createCustomer(createCustomerInput: $createCustomerInput) {
      idCard
      firstName
      lastName
      address
      phoneNumber
      lineId
      email
    }
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation updateCustomer($updateCustomerInput: UpdateCustomerInput!){
    updateCustomer(updateCustomerInput: $updateCustomerInput){
      id
      idCard
      firstName
      lastName
      address
      phoneNumber
      lineId
      email
    }
  }
`;
export const REMOVE_CUSTOMER =gql`
  mutation removeCustomer($id: Int!){
    removeCustomer(id: $id){
      id
      idCard
      firstName
      lastName
      address
      phoneNumber
      lineId
      email
    }
  }
`;


