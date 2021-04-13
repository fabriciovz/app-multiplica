import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorsService } from './services/products/colors.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ColorsService
  ]
})
export class CoreModule { }
