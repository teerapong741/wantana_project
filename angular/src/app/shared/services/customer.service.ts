import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { CREATE_CUSTOMER, UPDATE_CUSTOMER } from '../schemas/customer/mutation';
import { CUSTOMER, CUSTOMERS } from '../schemas/customer/query';


export interface CreateCustomerInput {
  idCard: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: number;
  lineId: number;
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
  constructor(private apollo: Apollo) {}
  // ในเซอร์วิชมีฟังก์ชั่นกี่ตัวก็ได้
  customers(): Observable<any> {
    return this.apollo.watchQuery({
      query: CUSTOMERS,
      errorPolicy: 'all',
    }).valueChanges;
  } //ฟังก์ชั่น

  customer(id: number): Observable<any> {
    return this.apollo.watchQuery({
      query: CUSTOMER,
      variables: { id: id },
      errorPolicy: 'all',
    }).valueChanges;
  }

  createCustomer(createCustomerInput: CreateCustomerInput): Observable<any> {
    return this.apollo.mutate({
      mutation: CREATE_CUSTOMER,
      variables: { createCustomerInput: createCustomerInput },
      errorPolicy: 'all',
    });
  }
  // updateCustomer(updateCustomerInput: UpdateCustomerInput):Observable<any>{
  //   return this.apollo.mutate({
  //     mutation: UPDATE_CUSTOMER,
  //     variables:{updateCustomerInput:updateCustomerInput},
  //     errorPolicy:'all',
  //   });
  // }
}
