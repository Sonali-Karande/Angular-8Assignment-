import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { AdvanceChildComponent } from './advance-child/advance-child.component';
import { AdvanceParentComponent } from './advance-parent/advance-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    DemoComponent,
    AdvanceChildComponent,
    AdvanceParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
