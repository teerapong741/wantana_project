import { gql } from 'apollo-angular';

export const CREATE_EMPLOYEE = gql`
    mutation createEmployee($createEmployeeInput: CreateEmployeeInput!){
        createEmployee(createEmployeeInput: $createEmployeeInput){
            
            idCard
            firstName
            lastName
            address
            phoneNumber
            email
            password  
        }
    }
`;

export const UPDATE_EMPLOYEE= gql`
    mutation updateEmployee($updateEmployeeInput: UpdateEmployeeInput!){
        updateEmployee(updateEmployeeInput: $updateEmployeeInput){
            id
            idCard
            firstName
            lastName
            address
            phoneNumber
            email
            password  
        }
    }
`;