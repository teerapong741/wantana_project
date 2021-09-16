import { DamagedClothListComponent } from './damaged-cloth-list/damaged-cloth-list.component';
import { EditDamagedClothComponent } from './edit-damaged-cloth/edit-damaged-cloth.component';
import { ManageDamagedClothComponent } from './manage-damaged-cloth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ManageDamagedClothComponent,
    children: [
      { path: '', redirectTo: 'damaged-cloth-list' },
      { path: 'edit-damaged-cloth', component: EditDamagedClothComponent },
      { path: 'damaged-cloth-list', component: DamagedClothListComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageDamagedClothRoutingModule {}
