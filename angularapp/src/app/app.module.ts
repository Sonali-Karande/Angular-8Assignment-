import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DirectivesassComponent } from './directivesass/directivesass.component';
import { NgCourcesComponent } from './ng-cources/ng-cources.component';
import { NgswithassComponent } from './ngswithass/ngswithass.component';
import { AttriComponent } from './attri/attri.component';
// import { CustdirDirective } from './custdir.directive';
import { CustPassComponent } from './cust-pass/cust-pass.component';
import { MatchValueDirective } from './match-value.directive';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFilterComponent } from './employee-filter/employee-filter.component';
import { AtinputdecoComponent } from './atinputdeco/atinputdeco.component';
import { HookComponent } from './hook/hook.component';
import { ParentNgonchangesComponent } from './parent-ngonchanges/parent-ngonchanges.component';
import { ClildNgonchangesComponent } from './clild-ngonchanges/clild-ngonchanges.component';
import { DirassgnComponent } from './dirassgn/dirassgn.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { ReactiveformsdemoComponent } from './reactiveformsdemo/reactiveformsdemo.component';
import { Servicecopm1Component } from './servicecopm1/servicecopm1.component';
import { Servicecopm2Component } from './servicecopm2/servicecopm2.component';
    
import {HttpClientModule} from '@angular/common/http';
import { Comp1subjectComponent } from './comp1subject/comp1subject.component';
import { Comp2subjectComponent } from './comp2subject/comp2subject.component';
import { Comp3subjectComponent } from './comp3subject/comp3subject.component';
import { Comp4subjectComponent } from './comp4subject/comp4subject.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ImagesComponent } from './images/images.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { DemopostComponent } from './demopost/demopost.component';
import { PsotdetailsComponent } from './psotdetails/psotdetails.component';
import { ProductsModule } from './product/products.module';
import { ElectonicsModule } from './electronics/electonics.module';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DemodirectivesComponent,
    NgswitchComponent,
    DirectivesassComponent,
    NgCourcesComponent,
    NgswithassComponent,
    AttriComponent,
    // CustdirDirective,
    CustPassComponent,
    MatchValueDirective,
    EmployeeComponent,
    EmployeeFilterComponent,
    AtinputdecoComponent,
    HookComponent,
    ParentNgonchangesComponent,
    ClildNgonchangesComponent,
    DirassgnComponent,
    SimpleformComponent,
    ReactiveformsdemoComponent,
    Servicecopm1Component,
    Servicecopm2Component,
    Comp1subjectComponent,
    Comp2subjectComponent,
    Comp3subjectComponent,
    Comp4subjectComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    LoginComponent,
    ImagesComponent,
    PagenotfoundComponent,
 
    DemopostComponent,
    PsotdetailsComponent
  
  ],
  imports: [
    ProductsModule ,//feature module improve file size before approuting module 
    ElectonicsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
