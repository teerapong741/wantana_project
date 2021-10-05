import { ManageEmployeeComponent } from './manage-employee.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputMaskModule } from 'primeng/inputmask';
import {PasswordModule} from 'primeng/password';

import { ManageEmployeeRoutingModule } from './manage-employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    ManageEmployeeComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
  ],
  imports: [
    CommonModule,
    ManageEmployeeRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    InputTextareaModule,
    KeyFilterModule,
    InputMaskModule,
    PasswordModule
  ],
})
export class ManageEmployeeModule {}
