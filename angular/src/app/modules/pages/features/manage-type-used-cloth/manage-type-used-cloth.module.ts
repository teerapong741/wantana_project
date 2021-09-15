import { ManageTypeUsedClothComponent } from './manage-type-used-cloth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageTypeUsedClothRoutingModule } from './manage-type-used-cloth-routing.module';
import { AddTypeUsedClothComponent } from './add-type-used-cloth/add-type-used-cloth.component';
import { TypeUsedClothListComponent } from './type-used-cloth-list/type-used-cloth-list.component';

@NgModule({
  declarations: [
    ManageTypeUsedClothComponent,
    AddTypeUsedClothComponent,
    TypeUsedClothListComponent,
  ],
  imports: [CommonModule, ManageTypeUsedClothRoutingModule],
})
export class ManageTypeUsedClothModule {}
