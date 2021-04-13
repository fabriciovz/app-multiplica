import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@material/material.module';
import { CoreModule } from '@core/core.module';


import { AdminRoutingModule } from './admin-routing.module';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ColorsListComponent } from './components/colors-list/colors-list.component';

@NgModule({
  declarations: [
    ColorFormComponent,
    NavComponent,
    ColorsListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule
  ]
})
export class AdminModule { }
