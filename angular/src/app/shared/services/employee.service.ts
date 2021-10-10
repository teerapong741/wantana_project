import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { EMPLOYEE, EMPLOYEES } from '../schemas/employee/query';

export interface CreateEmployeeInput {
  idCard: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: number;
  email: string;
  password: string;
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
}
