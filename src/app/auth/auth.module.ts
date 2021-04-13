import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '@material/material.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';


import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
