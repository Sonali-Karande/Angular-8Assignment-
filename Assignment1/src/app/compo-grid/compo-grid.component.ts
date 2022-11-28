import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/cources';

@Component({
  selector: 'app-compo-grid',
  templateUrl: './compo-grid.component.html',
  styleUrls: ['./compo-grid.component.css']
})
export class CompoGridComponent implements OnInit {

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

}
