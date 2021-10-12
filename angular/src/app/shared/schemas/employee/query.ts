import { gql } from 'apollo-angular';

export const EMPLOYEES = gql`
    query employees{
        employees{
            id
            firstName
            lastName
        }
    }
`;

export const EMPLOYEE = gql`
    query employee($id: Int!){
        employee(id: $id){
            id
            idCard
            firstName
            lastName
            address
            phoneNumber
            email
            password  
            role
        }
    }
`;