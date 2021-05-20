import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

import { PizzeriaComponent } from './pizzeria/pizzeria.component';

const routes: Routes = [
  { path: '', redirectTo: '/pizzeria', pathMatch: 'full' }, 
  { path: 'pizzeria', component: PizzeriaComponent }, 
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
