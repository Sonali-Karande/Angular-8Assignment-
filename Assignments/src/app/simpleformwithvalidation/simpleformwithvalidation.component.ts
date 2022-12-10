import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student2 } from '../models/student2';

@Component({
  selector: 'app-simpleformwithvalidation',
  templateUrl: './simpleformwithvalidation.component.html',
  styleUrls: ['./simpleformwithvalidation.component.css']
})
export class SimpleformwithvalidationComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
student= new Student2();
currentDate:any=new Date();
  defualtValue1:string="Jijamata girls hisghschool pune";
  defualtValue2:string="Computer and Science";
  defualtValue3:string="Engineering";
  submitted:boolean=false;
  onSubmit(studentForm:NgForm){
    this.submitted = true;
    this.student.fname=studentForm.value.nameDetails.fname;
    this.student.mname=studentForm.value.nameDetails.mname;
    this.student.lname=studentForm.value.nameDetails.lname;
    this.student.dob=studentForm.value.nameDetails.dob;
    this.student.gender=studentForm.value.gender;
    this.student.email=studentForm.value.email;
    this.student.school=studentForm.value.school;
    this.student.dept=studentForm.value.department;
    this.student.course=studentForm.value.course;
    this.student.mno=studentForm.value.mno;
    console.log(studentForm.value.nameDetails.fname);
    console.log(studentForm.value.nameDetails.mname);
    console.log(studentForm.value.nameDetails.lname);
    console.log(studentForm.value.nameDetails.dob);
    console.log(studentForm.value.gender);
    console.log(studentForm.value.email);
    console.log(studentForm.value.school);
    console.log(studentForm.value.department);
    console.log(studentForm.value.course);
    console.log(studentForm);
  }
}






