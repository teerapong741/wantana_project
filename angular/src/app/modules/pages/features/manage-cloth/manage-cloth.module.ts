import { SharedModule } from './../../../../shared/shared.module';
import { ManageClothComponent } from './manage-cloth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {TreeTableModule} from 'primeng/treetable';



import { ManageClothRoutingModule } from './manage-cloth-routing.module';
import { AddClothComponent } from './add-cloth/add-cloth.component';
import { EditClothComponent } from './edit-cloth/edit-cloth.component';
import { ClothListComponent } from './cloth-list/cloth-list.component';

import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    ManageClothComponent,
    AddClothComponent,
    EditClothComponent,
    ClothListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ManageClothRoutingModule,
    SharedModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    RippleModule,
    DynamicDialogModule,
    TableModule,
    TreeTableModule,
  ],
})
export class ManageClothModule {}
