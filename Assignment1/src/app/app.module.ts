import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { warningComponent } from './warningAlert/warningAlert.component';
import { CompoGridComponent } from './compo-grid/compo-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    warningComponent,
    SuccessAlertComponent,
    CompoGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
