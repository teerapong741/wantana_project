import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [FeaturesComponent, DashboardComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SidebarModule,
    ButtonModule,
    RippleModule,
  ],
})
export class FeaturesModule {}
