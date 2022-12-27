import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ProductComponent } from './product/product.component';
import { TabletsComponent } from './product/tablets/tablets.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { PsotdetailsComponent } from './psotdetails/psotdetails.component';
import { ReactiveformsdemoComponent } from './reactiveformsdemo/reactiveformsdemo.component';
import { SimpleformComponent } from './simpleform/simpleform.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  { path:'home',component:HomeComponent},//lcalhosr://4200/

  { path:'aboutus',component:AboutusComponent},//lcalhosr://4200/aboutus
  {path:'product',component:ProductComponent,children:[
  
    {path:'laptop',component:LaptopComponent},
    {path:'tablets',component:TabletsComponent},
    {path:'tv',component:TvComponent},
    {path:'washingmachine',component:WashingmachineComponent}
  ]},//lcalhosr://4200/ProductComponent
  {path:'contactus',component:ContactusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'post',component:DemopostComponent},
  {path:'psotdetails/:id',component:PsotdetailsComponent},
  {path:'reactiveformsdemo',component:ReactiveformsdemoComponent},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
