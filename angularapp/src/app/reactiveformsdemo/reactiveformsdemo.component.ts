import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveformsdemo',
  templateUrl: './reactiveformsdemo.component.html',
  styleUrls: ['./reactiveformsdemo.component.css']
})
export class ReactiveformsdemoComponent implements OnInit {
  myReactiveForm: FormGroup;
  constructor() {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      // 'username':new FormControl('CodemindTechnology',Validators.required),
      'username': new FormControl('', [Validators.required,this.naNames.bind(this)]),
      'email': new FormControl('', [Validators.required,Validators.email]),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male')
    })
  }
  notAllowedNames=['codemind','technology'];
  msg:string="";
  naNames(control:FormControl){
if (this.notAllowedNames.indexOf(control.value)!==-1) {
this.msg=`names not alowed ${this.notAllowedNames[0]}`;
  return{'notAllowedNames':true};
}
{
  return null;
}
  }
  genders=[
    {id:`1`,value:`Male`},
    {id:`2`,value:`Female`}
  ];
  onSubmit() {
    console.log(this.myReactiveForm);

  }

}
