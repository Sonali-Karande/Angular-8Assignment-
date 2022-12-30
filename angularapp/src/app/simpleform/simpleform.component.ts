import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee1 } from '../models/employee1';
@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
// employee:Employee1;
  constructor() { }
  employee = new Employee1();

  ngOnInit() {
  }
  genders=[
    {id:`1`,value:`Male`},
    {id:`2`,value:`Female`}
  ];
  defaultgender:string="Male";
  defualtValue:string="Angular";
  submitted:boolean=false;
  OnSubmit(form:NgForm) {
    this.submitted = true;
    this.employee .course= form.value.course;
    this.employee .username = form.value.userDetails.username;
    this.employee .email = form.value.userDetails.email;
this.employee.gender=form.value.gender;
form.reset();
form.controls[`course`].setValue(`Angular`);
form.controls[`gender`].setValue(`Male`)
  // this.saveEmployeeData(this.employee);
  }
 
  saveEmployeeData(employee:Employee1) {
   console.log(employee.course);
   console.log(employee.username);
   console.log(employee.email);
  }

}
