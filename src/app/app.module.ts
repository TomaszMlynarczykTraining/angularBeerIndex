import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './shared/components/layout/layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppService } from './app.service';
import { AuthGuard } from './shared/services/auth-gurad';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AppService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
