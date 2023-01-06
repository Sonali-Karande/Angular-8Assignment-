import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { CrudwithfirebaseComponent } from './crudwithfirebase/crudwithfirebase.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageproComponent } from './managepro/managepro.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { PsotdetailsComponent } from './psotdetails/psotdetails.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { ReactiveformsdemoComponent } from './reactiveformsdemo/reactiveformsdemo.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { UnSavedChangesGuard } from './un-saved-changes.guard';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  { path:'home',component:HomeComponent},//lcalhost://4200/

  { path:'aboutus',canActivate:[AuthGuard],component:AboutusComponent},//lcalhost://4200/aboutus
  

  // {path:'contactus',component:ContactusComponent},
  {path:'post',component:DemopostComponent},
  {path:'psotdetails/:id',component:PsotdetailsComponent},
  {path:'adduser',component:AdduserComponent,canDeactivate:[UnSavedChangesGuard]},
  {path:'simpleform',component:SimpleformComponent,canDeactivate:[UnSavedChangesGuard]},
  {path:'reactiveformsdemo',component:ReactiveformsdemoComponent,canDeactivate:[UnSavedChangesGuard]},
  { path:'electronics',loadChildren:'./electronics/electonics.module#ElectonicsModule'},//lazy loading
  {path: 'product', canActivate:[AuthGuard], loadChildren: './product/products.module#ProductsModule'},

  { path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},//lazy loading
  {path:'rapidapi',component:RapidapiComponent},
  {path:'managepro',component:ManageproComponent},
  {path:'crudwithfirebase',component:CrudwithfirebaseComponent},
  
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  //imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],//pre loadingng stratigy
  imports: [RouterModule.forRoot(routes)],//lazy loading strategy
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log('AppRoutingModule called');

  }
 }
