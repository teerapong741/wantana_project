import { ManageCustomerComponent } from './manage-customer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';


import { ManageCustomerRoutingModule } from './manage-customer-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    ManageCustomerComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomerListComponent,
  ],
  imports: [CommonModule, ManageCustomerRoutingModule,ButtonModule,InputTextModule],
})
export class ManageCustomerModule {}
