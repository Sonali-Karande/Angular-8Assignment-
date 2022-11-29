import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-atinputdeco',
  templateUrl: './atinputdeco.component.html',
  styleUrls: ['./atinputdeco.component.css']
})
export class AtinputdecoComponent implements OnInit {

  @Input() empInfo;

  constructor() { }

  ngOnInit() {
    console.table(this.empInfo);
  }

}
// id:number;
// name:string;
// salary:number;
// age:number;
// gender:string