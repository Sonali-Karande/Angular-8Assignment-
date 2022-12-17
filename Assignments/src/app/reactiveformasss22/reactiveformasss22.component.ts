import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveformasss22',
  templateUrl: './reactiveformasss22.component.html',
  styleUrls: ['./reactiveformasss22.component.css']
})
export class Reactiveformasss22Component implements OnInit {
  myReactiveForm: FormGroup;
  constructor() {
    this.createForm();
  }

  ngOnInit() {
  }
integerRegex=/^\d+$/;
emailRegex="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  createForm() {
    this.myReactiveForm = new FormGroup({
      // 'username':new FormControl('CodemindTechnology',Validators.required),
      'fname': new FormControl('', [Validators.required,Validators.maxLength(32)]),
      'lname': new FormControl('', [Validators.required,Validators.maxLength(32)]),
      'age': new FormControl('', [Validators.required,Validators.max(60),Validators.min(18),Validators.pattern(this.integerRegex)]),
      'email': new FormControl('', [Validators.required,Validators.maxLength(32),Validators.pattern(this.emailRegex)]),
      'mobile': new FormControl('', [Validators.required,Validators.maxLength(10),Validators.maxLength(10),Validators.pattern(this.integerRegex)]),
      'city': new FormControl('Mumbai', [Validators.required]),
      'gender': new FormControl('Male', [Validators.required]),
      'password': new FormControl('',[Validators.required,Validators.maxLength(32),Validators.minLength(8)]),
      'confirmPassword': new FormControl('',[Validators.required,Validators.maxLength(32),Validators.minLength(8)])
    })
  }

  genders=[
    {id:`1`,value:`Male`},
    {id:`2`,value:`Female`}
  ];
  onSubmit() {
    console.log(this.myReactiveForm);
    this.myReactiveForm.reset();
  }
}
