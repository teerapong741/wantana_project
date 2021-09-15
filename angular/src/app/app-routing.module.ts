import { LoginComponent } from './modules/pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'features',
    loadChildren: () =>
      import('./modules/pages/features/features.module').then(
        (m) => m.FeaturesModule
      ),
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
