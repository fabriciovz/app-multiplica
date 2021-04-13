import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorFormComponent } from './components/color-form/color-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ColorsListComponent } from './components/colors-list/colors-list.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'admin/colores',
        component: ColorsListComponent
      },
      {
        path: 'admin/colores/create',
        component: ColorFormComponent
      },
      {
        path: 'admin/colores/edit/:id',
        component: ColorFormComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
