import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KoszComponent } from './kosz/kosz.component';
import { MenuComponent } from './menu/menu.component';

import { PizzeriaComponent } from './pizzeria/pizzeria.component';
// import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [
  { path: '', redirectTo: '/pizzeria', pathMatch: 'full' }, 
  { path: 'pizzeria', component: PizzeriaComponent }, 
  // { path: 'pizzeria/:selectionId', component: SelectionComponent }, 
  { path: 'menu', component: MenuComponent },
  // { path: 'menu/:menuId', component: MenuComponent }
  { path: 'kosz', component: KoszComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
