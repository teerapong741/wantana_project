import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
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



@NgModule({
  declarations: [
    FeaturesComponent,
    DashboardComponent,
    ManageCustomerComponent,
    ManageMessengerLineComponent,
    ManageStatusComponent,
    ReportComponent,
    ProfileComponent,
  ],
  imports: [
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
  ],
})
export class FeaturesModule {}
