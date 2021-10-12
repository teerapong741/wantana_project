import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { CREATE_EMPLOYEE } from '../schemas/employee/mutation';
import { EMPLOYEE, EMPLOYEES } from '../schemas/employee/query';

export interface CreateEmployeeInput {
  idCard: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({providedIn:'root'})
export class EmployeeService{
    constructor(private apollo:Apollo){}

    employees():Observable<any>{
        return this.apollo.watchQuery({
            query: EMPLOYEES,
            errorPolicy:'all', 
        }).valueChanges;
    }

    employee(id:number):Observable<any>{
        return this.apollo.watchQuery({
            query: EMPLOYEE,
            variables:{id:id},
            errorPolicy:'all'
        }).valueChanges
    }
    createEmployee(createEmployeeInput: CreateEmployeeInput):Observable<any>{
        return this.apollo.mutate({
            mutation: CREATE_EMPLOYEE,
            variables:{createEmployeeInput: createEmployeeInput},
            errorPolicy:'all'
        });
    }
}
