import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { warningComponent } from './warningAlert/warningAlert.component';
import { CompoGridComponent } from './compo-grid/compo-grid.component';
import { FormsModule } from '@angular/forms';
import { InputdeoratoerComponent } from './inputdeoratoer/inputdeoratoer.component';
import { OutputdecoratorComponent } from './outputdecorator/outputdecorator.component';
import { AddRemoveTableContentComponent } from './add-remove-table-content/add-remove-table-content.component';

@NgModule({
  declarations: [
    AppComponent,
    warningComponent,
    SuccessAlertComponent,
    CompoGridComponent,
    InputdeoratoerComponent,
    OutputdecoratorComponent,
    AddRemoveTableContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }