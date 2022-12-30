import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronicsComponent } from './electronics.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { ComputeraccessoriesComponent } from './computeraccessories/computeraccessories.component';
import { PendriveComponent } from './pendrive/pendrive.component';
import { MemorycardComponent } from './memorycard/memorycard.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilityModule } from '../models/utility.module';




const eleRoutes:Routes=[
  {path:'',component:ElectronicsComponent,children:[
  
    {path:'headphone',component:HeadphonesComponent},
    {path:'computeraccessories',component:ComputeraccessoriesComponent},
    {path:'pendrive',component:PendriveComponent},
    {path:'memorycard',component:MemorycardComponent}
  ]},//lcalhost://4200/ProductComponent
]

@NgModule({
  declarations: [
    ElectronicsComponent,
    HeadphonesComponent, 
    ComputeraccessoriesComponent, 
    PendriveComponent,
     MemorycardComponent
    ],
  imports: [
    CommonModule,
    
    RouterModule.forChild(eleRoutes),
    UtilityModule
  ],
  exports:[
    RouterModule
  ]
})
export class ElectonicsModule {
  constructor(){
    console.log('ElectonicsModule called');

  }
 }

           