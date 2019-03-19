import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/services/auth-gurad';

const routes: Routes=[{ path: '', loadChildren: './dashboard/dashboard.module#DashboardModule', pathMatch: 'full', canActivate:[AuthGuard] },
{ path: 'login', loadChildren: './login/login.module#LoginModule', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
