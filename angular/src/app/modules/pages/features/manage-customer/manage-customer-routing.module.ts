import { CustomerListComponent } from './customer-list/customer-list.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ManageCustomerComponent } from './manage-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ManageCustomerComponent,
    children: [
      { path: '', redirectTo: 'customer-list' },
      { path: 'add-customer', component: AddCustomerComponent },
      { path: 'edit-customer', component: EditCustomerComponent },
      { path: 'customer-list', component: CustomerListComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageCustomerRoutingModule {}
