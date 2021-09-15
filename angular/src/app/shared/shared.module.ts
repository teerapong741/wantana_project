import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule, RouterModule, LoadingComponent],
})
export class SharedModule {}
