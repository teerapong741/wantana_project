import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ManageEmployeeComponent } from './manage-employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ManageEmployeeComponent,
    children: [
      { path: '', redirectTo: 'employee-list' },
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: 'edit-employee', component: EditEmployeeComponent },
      { path: 'employee-list', component: EmployeeListComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageEmployeeRoutingModule {}
