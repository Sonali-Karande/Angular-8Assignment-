import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/courses';

@Component({
  selector: 'app-ng-cources',
  templateUrl: './ng-cources.component.html',
  styleUrls: ['./ng-cources.component.css']
})
export class NgCourcesComponent implements OnInit {
title:string=`Angular Courses`;
courses:Courses[]=[
  {srNo:1,courseName:`Angular UI Developer`,courseFee:20000,courseDuration:`3 Months`},
  {srNo:2,courseName:`Angular Bank End Developer`,courseFee:30000,courseDuration:`4 Months`},
  {srNo:3,courseName:`Angular full Stack Developer`,courseFee:40000,courseDuration:`6 Months`},
  {srNo:3,courseName:`Java full Stack Developer`,courseFee:40000,courseDuration:`6 Months`}
]
  constructor() { }

  ngOnInit() {
  }

}
