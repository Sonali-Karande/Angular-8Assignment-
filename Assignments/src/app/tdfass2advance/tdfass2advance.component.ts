import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student3 } from '../models/student2';

@Component({
  selector: 'app-tdfass2advance',
  templateUrl: './tdfass2advance.component.html',
  styleUrls: ['./tdfass2advance.component.css']
})
export class Tdfass2advanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  password:string;
  confirmPassword:string;
  defualtValue="Mumbai";
  defaultgender="Male";
  genders=[
    {id:`1`,value:`Male`},
    {id:`2`,value:`Female`}
  ];
  submitted:boolean=false;
  show:boolean=false;
  student=new Student3();
 arrayStudent=[];

  onSubmit(studentForm:NgForm) {
    console.log(studentForm);
     this.submitted = true;
     this.show=true;
    this.student.fname=studentForm.value.fname;
    this.student.lname=studentForm.value.lname;
    this.student.age=studentForm.value.age;
    this.student.email=studentForm.value.email;
    this.student.mobile=studentForm.value.mobile;
    this.student.city=studentForm.value.city;
    this.student.gender=studentForm.value.gender;
    this.student.password=studentForm.value.password;
    this.student.confirmPassword=studentForm.value.confirmPassword;
 this.arrayStudent.push(studentForm.value);
    
    studentForm.reset();
studentForm.controls[`city`].setValue(`Angular`);
studentForm.controls[`gender`].setValue(`Male`)
  this.saveStudentData(this.student);
  }
  saveStudentData(student:Student3) {
    console.log(student.fname);
    console.log(student.email);
    console.log(student.city);
    console.log(student.gender);
   }
 mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
 passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$';
 emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" ;

}

