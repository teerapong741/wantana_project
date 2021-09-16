import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {TableModule} from 'primeng/table';

import { ManageMessengerLineComponent } from './manage-messenger-line/manage-messenger-line.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    DashboardComponent,
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
  ],
})
export class FeaturesModule {}
