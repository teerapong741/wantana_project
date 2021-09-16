import { ClothTypeListComponent } from './cloth-type-list/cloth-type-list.component';
import { AddClothTypeComponent } from './add-cloth-type/add-cloth-type.component';
import { ManageClothTypeComponent } from './manage-cloth-type.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ManageClothTypeComponent,
    children: [
      { path: '', redirectTo: 'cloth-type-list' },
      { path: 'add-cloth-type', component: AddClothTypeComponent },
      { path: 'cloth-type-list', component: ClothTypeListComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageClothTypeRoutingModule {}
