import { ClothListComponent } from './cloth-list/cloth-list.component';
import { EditClothComponent } from './edit-cloth/edit-cloth.component';
import { AddClothComponent } from './add-cloth/add-cloth.component';
import { ManageClothComponent } from './manage-cloth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ManageClothComponent,
    children: [
      { path: '', redirectTo: 'cloth-list' },
      { path: 'add-cloth', component: AddClothComponent },
      { path: 'edit-cloth', component: EditClothComponent },
      { path: 'cloth-list', component: ClothListComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageClothRoutingModule {}
