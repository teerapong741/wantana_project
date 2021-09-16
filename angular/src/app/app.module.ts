import { AddClothOptionComponent } from './modules/components/add-cloth-option/add-cloth-option.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/pages/login/login.component';

import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [AppComponent, LoginComponent, AddClothOptionComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    SelectButtonModule,
    InputNumberModule,
    ButtonModule,
    RippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
