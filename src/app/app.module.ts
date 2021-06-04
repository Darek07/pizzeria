import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { MenuComponent } from './menu/menu.component';
import { SelectionComponent } from './selection/selection.component';
import { KoszComponent } from './kosz/kosz.component';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PizzeriaComponent,
    MenuComponent,
    SelectionComponent,
    KoszComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
