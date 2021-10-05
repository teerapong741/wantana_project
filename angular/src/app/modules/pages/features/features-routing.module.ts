import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { ManageMessengerLineComponent } from './manage-messenger-line/manage-messenger-line.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      {
        path: 'manage-cloth',
        loadChildren: () =>
          import('./manage-cloth/manage-cloth.module').then(
            (m) => m.ManageClothModule
          ),
      },
      { path: 'manage-customer', component: ManageCustomerComponent },
      {
        path: 'manage-employee',
        loadChildren: () =>
          import('./manage-employee/manage-employee.module').then(
            (m) => m.ManageEmployeeModule
          ),
      },
      {
        path: 'manage-damaged-cloth',
        loadChildren: () =>
          import('./manage-damaged-cloth/manage-damaged-cloth.module').then(
            (m) => m.ManageDamagedClothModule
          ),
      },
      {
        path: 'manage-cloth-type',
        loadChildren: () =>
          import('./manage-cloth-type/manage-cloth-type.module').then(
            (m) => m.ManageClothTypeModule
          ),
      },
      {
        path: 'manage-type-used-cloth',
        loadChildren: () =>
          import('./manage-type-used-cloth/manage-type-used-cloth.module').then(
            (m) => m.ManageTypeUsedClothModule
          ),
      },
      {
        path: 'manage-messenger-line',
        component: ManageMessengerLineComponent,
      },
      { path: 'manage-status', component: ManageStatusComponent },
      { path: 'report', component: ReportComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
