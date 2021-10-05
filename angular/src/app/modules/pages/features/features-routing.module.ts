import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { ManageMessengerLineComponent } from './manage-messenger-line/manage-messenger-line.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ManageDamagedClothComponent } from './manage-damaged-cloth/manage-damaged-cloth.component';
import { ManageClothTypeComponent } from './manage-cloth-type/manage-cloth-type.component';
import { ManageTypeUsedClothComponent } from './manage-type-used-cloth/manage-type-used-cloth.component';

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
      { path: 'manage-employee', component: ManageEmployeeComponent },
      { path: 'manage-damaged-cloth', component: ManageDamagedClothComponent },
      { path: 'manage-cloth-type', component: ManageClothTypeComponent },
      { path: 'manage-type-used-cloth', component: ManageTypeUsedClothComponent },
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
