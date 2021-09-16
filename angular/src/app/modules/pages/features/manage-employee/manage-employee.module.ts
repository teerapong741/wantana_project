import { ManageEmployeeComponent } from './manage-employee.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEmployeeRoutingModule } from './manage-employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    ManageEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeListComponent,
  ],
  imports: [CommonModule, ManageEmployeeRoutingModule],
})
export class ManageEmployeeModule {}
