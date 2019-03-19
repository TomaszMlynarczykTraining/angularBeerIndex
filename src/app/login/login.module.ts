import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login-service';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [LoginService]
})
export class LoginModule { }
