import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DirectivesassComponent } from './directivesass/directivesass.component';
import { NgCourcesComponent } from './ng-cources/ng-cources.component';
import { NgswithassComponent } from './ngswithass/ngswithass.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { CustPassComponent } from './cust-pass/cust-pass.component';
import { MatchValueDirective } from './match-value.directive';

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
    CustdirDirective,
    CustPassComponent,
    MatchValueDirective
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
