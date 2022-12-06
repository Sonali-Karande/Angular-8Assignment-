import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/cources';
import { CustomerSalonService } from '../models/service';
import { Student } from '../models/student';

@Component({
  selector: 'app-compo-grid',
  templateUrl: './compo-grid.component.html',
  styleUrls: ['./compo-grid.component.css']
})
export class CompoGridComponent implements OnInit {
// name:string="";
password:any="";
rePassword:any="";
msg:any="";
showMsg()
{
  if (this.password===this.rePassword) {
    this.msg="Login Successful ";
  }
  else
  {
    this.msg="Password is not Matched";

  }
}
clear()
{
  this.name="";
  this.password="";
  this.rePassword="";
  this.msg="";
}
  isShow:boolean=true;
  title:string=`Angular Courses`;
  courses:Courses[]=[
    {srNo:1,courseName:`Angular UI Developer`,courseFee:20000,courseDuration:`3 Months`},
    {srNo:2,courseName:`Angular Bank End Developer`,courseFee:30000,courseDuration:`4 Months`},
    {srNo:3,courseName:`Angular full Stack Developer`,courseFee:40000,courseDuration:`6 Months`},
    {srNo:3,courseName:`Java full Stack Developer`,courseFee:40000,courseDuration:`6 Months`}
  ]
  selectedLanguage:string;
  getProductValue(value) {
    console.log(value.target.value);
    this.selectedLanguage = value.target.value;
  }





  constructor() { }

  ngOnInit() {
  }


  cutInfo:CustomerSalonService[]=[];

customerName:string;
wantService:string;
selectDate:Date;
selectTime:Date;
customerMobile:number;

addData(b,c,d,e,f){
  this.cutInfo.push({customerName:b,wantService:c,selectDate:d,selectTime:e,customerMobile:f});

}
studInfo:Student[]=[];
    name:string="";

    degree:string;
      passOutYear:Date;
      address:string;
      mobile:number;
      email:string;
      addData2(a,b,c,d,e,f){
        this.studInfo.push({name:a,degree:b,passOutYear:c,address:d,mobile:e,email:f});
        }
        remove2(indexValue){
          this.studInfo.splice(indexValue,1)
        }
        clear2()
        {
          this.name='';
          this.degree='';
          this.passOutYear=null;
          this.mobile=null;
          this.email='';
        }



}
