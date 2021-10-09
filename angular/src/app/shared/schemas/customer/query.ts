import { gql } from 'apollo-angular';

export const CUSTOMERS = gql`
  query customers {
    customers {
      id
      firstName      
    }
  }
`;

export const CUSTOMER = gql`
  query customer($id:Int!){
      customer(id:$id){
        id
        status
      }
  } 
`
