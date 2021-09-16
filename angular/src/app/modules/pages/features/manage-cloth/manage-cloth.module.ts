import { ManageClothComponent } from './manage-cloth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageClothRoutingModule } from './manage-cloth-routing.module';
import { AddClothComponent } from './add-cloth/add-cloth.component';
import { EditClothComponent } from './edit-cloth/edit-cloth.component';
import { ClothListComponent } from './cloth-list/cloth-list.component';

@NgModule({
  declarations: [
    ManageClothComponent,
    AddClothComponent,
    EditClothComponent,
    ClothListComponent,
  ],
  imports: [CommonModule, ManageClothRoutingModule],
})
export class ManageClothModule {}
