import { TypeUsedClothListComponent } from './type-used-cloth-list/type-used-cloth-list.component';
import { AddTypeUsedClothComponent } from './add-type-used-cloth/add-type-used-cloth.component';
import { ManageTypeUsedClothComponent } from './manage-type-used-cloth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ManageTypeUsedClothComponent,
    children: [
      { path: '', redirectTo: 'type-used-cloth-list' },
      { path: 'add-type-used-cloth', component: AddTypeUsedClothComponent },
      { path: 'type-used-cloth-list', component: TypeUsedClothListComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageTypeUsedClothRoutingModule {}
