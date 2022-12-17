import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { warningComponent } from './warningAlert/warningAlert.component';
import { CompoGridComponent } from './compo-grid/compo-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputdeoratoerComponent } from './inputdeoratoer/inputdeoratoer.component';
import { OutputdecoratorComponent } from './outputdecorator/outputdecorator.component';
import { AddRemoveTableContentComponent } from './add-remove-table-content/add-remove-table-content.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { SimpleformwithvalidationComponent } from './simpleformwithvalidation/simpleformwithvalidation.component';
import { TemplateformsassComponent } from './templateformsass/templateformsass.component';
import { ReactiveformassComponent } from './reactiveformass/reactiveformass.component';
import { Tdfass2advanceComponent } from './tdfass2advance/tdfass2advance.component';
import { Reactiveformasss22Component } from './reactiveformasss22/reactiveformasss22.component';

@NgModule({
  declarations: [
    AppComponent,
    warningComponent,
    SuccessAlertComponent,
    CompoGridComponent,
    InputdeoratoerComponent,
    OutputdecoratorComponent,
    AddRemoveTableContentComponent,
    SimpleformComponent,
    SimpleformwithvalidationComponent,
    TemplateformsassComponent,
    ReactiveformassComponent,
    Tdfass2advanceComponent,
    Reactiveformasss22Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
