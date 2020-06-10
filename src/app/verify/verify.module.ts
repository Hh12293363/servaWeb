import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VerifyRoutingModule } from './verify-routing.module';
import { LoginComponent } from './login/login.component';
import { VeryfyInfoComponent } from './veryfy-info/veryfy-info.component';


@NgModule({
  declarations: [LoginComponent, VeryfyInfoComponent],
  imports: [
    CommonModule,
    VerifyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VerifyModule { }
