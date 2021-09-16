import { ManageClothTypeComponent } from './manage-cloth-type.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageClothTypeRoutingModule } from './manage-cloth-type-routing.module';
import { AddClothTypeComponent } from './add-cloth-type/add-cloth-type.component';
import { ClothTypeListComponent } from './cloth-type-list/cloth-type-list.component';

@NgModule({
  declarations: [
    ManageClothTypeComponent,
    AddClothTypeComponent,
    ClothTypeListComponent,
  ],
  imports: [CommonModule, ManageClothTypeRoutingModule],
})
export class ManageClothTypeModule {}
