import { ManageDamagedClothComponent } from './manage-damaged-cloth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';


import { ManageDamagedClothRoutingModule } from './manage-damaged-cloth-routing.module';
import { EditDamagedClothComponent } from './edit-damaged-cloth/edit-damaged-cloth.component';
import { DamagedClothListComponent } from './damaged-cloth-list/damaged-cloth-list.component';

@NgModule({
  declarations: [
    ManageDamagedClothComponent,
    EditDamagedClothComponent,
    DamagedClothListComponent,
  ],
  imports: [CommonModule, ManageDamagedClothRoutingModule,TableModule],
})
export class ManageDamagedClothModule {}
