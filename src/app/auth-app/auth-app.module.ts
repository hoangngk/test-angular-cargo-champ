import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthAppRoutingModule } from './auth-app-routing.module';
import { AuthAppComponent } from './auth-app.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthAppComponent, LoginComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    AuthAppRoutingModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule, NbActionsModule,
    NbCheckboxModule,ReactiveFormsModule
  ]
})
export class AuthAppModule { }
