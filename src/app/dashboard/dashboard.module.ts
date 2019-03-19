import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../shared/material.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
