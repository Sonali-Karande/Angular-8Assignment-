import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletsComponent } from './tablets/tablets.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { UtilityModule } from '../models/utility.module';


const prodRoutes:Routes=[
  {path:'product',component:ProductComponent,children:[
  
    {path:'laptop',component:LaptopComponent},
    {path:'tablets',component:TabletsComponent},
    {path:'tv',component:TvComponent},
    {path:'washingmachine',component:WashingmachineComponent}
  ]},//lcalhost://4200/ProductComponent
]

@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TabletsComponent,
    TvComponent,
    WashingmachineComponent
  ],
  imports: [
    CommonModule,//split our module 

    RouterModule.forChild(prodRoutes),
    UtilityModule
  ],
  exports:[
    RouterModule
  ]
})
export class ProductsModule { }
