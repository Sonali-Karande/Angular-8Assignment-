import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employees:Employee[]=[
  {id:11,name:`Sonali`,salary:60000,age:32,gender:"Female"},
  {id:22,name:`Swati`,salary:40000,age:31,gender:"Female"},
  {id:33,name:`Nandini`,salary:65000,age:20,gender:"Female"},
  {id:44,name:`Kavya`,salary:60000,age:23,gender:"Female"},
  {id:55,name:`Vedika`,salary:50000,age:22,gender:"Female"},
  {id:65,name:`Anuja`,salary:70000,age:30,gender:"Female"},
];
getAllEmployeeCount():number{
return this.employees.length;
}
getMaleEmployeeCount():number{
  return this.employees.filter(emp=>emp.gender===`Male`).length;
  }
  getFeamleEmployeeCount():number{
    return this.employees.filter(emp=>emp.gender===`Female`).length;
  
    }
 



  constructor() { }

  ngOnInit() {
  }

}
