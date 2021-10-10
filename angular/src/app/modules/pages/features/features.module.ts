import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ManageDamagedClothComponent } from './manage-damaged-cloth/manage-damaged-cloth.component';
import { ManageClothTypeComponent } from './manage-cloth-type/manage-cloth-type.component';
import { ManageTypeUsedClothComponent } from './manage-type-used-cloth/manage-type-used-cloth.component';
import { ManageMessengerLineComponent } from './manage-messenger-line/manage-messenger-line.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FeaturesComponent,
    DashboardComponent,
    ManageCustomerComponent,
    ManageEmployeeComponent,
    ManageDamagedClothComponent,
    ManageClothTypeComponent,
    ManageTypeUsedClothComponent,
    ManageMessengerLineComponent,
    ManageStatusComponent,
    ReportComponent,
    ProfileComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    FeaturesRoutingModule,
    SidebarModule,
    ButtonModule,
    RippleModule,
    TableModule,
    InputTextModule,
    DialogModule,
    InputTextareaModule,
    KeyFilterModule,
    InputMaskModule,
    PasswordModule,
    SharedModule
  ],
})
export class FeaturesModule {}
