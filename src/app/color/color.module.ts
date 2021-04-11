import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorComponent } from './components/color/color.component';
import { ColorsComponent } from './components/colors/colors.component';

import { ColorRoutingModule } from './color-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ColorComponent,
    ColorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ColorRoutingModule,
    MaterialModule
  ]
})
export class ColorModule {

}
