import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveass33',
  templateUrl: './reactiveass33.component.html',
  styleUrls: ['./reactiveass33.component.css']
})
export class Reactiveass33Component implements OnInit {

  myReactiveForm: FormGroup;
  constructor() {
    this.createForm();
  }

  ngOnInit() {
    setTimeout(() => {
      this.myReactiveForm.patchValue({
        
          'pname': 'Codemind1122',
          'email': 'test@gmail.com',
          'pstatus':'Stable'
        }
          )}, 3500);
  }
integerRegex=/^\d+$/;
emailRegex="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  createForm() {
    this.myReactiveForm = new FormGroup({
      'pname': new FormControl('', [Validators.required,this.naNames.bind(this)]),
      'email': new FormControl('', [Validators.required,Validators.maxLength(32),Validators.pattern(this.emailRegex)],this.NaEmails),
      'pstatus': new FormControl('', [Validators.required,Validators.maxLength(10),Validators.maxLength(10),Validators.pattern(this.integerRegex)]),
    })
  }
  notAllowedNames=['codemind','technology','test'];
  naNames(control:FormControl){
    if (this.notAllowedNames.indexOf(control.value)!==-1) {
    
      return{'notAllowedNames':true};
    }
    {
      return null;
    }
      }
      NaEmails(control:FormControl): Promise<any> | Observable<any> {
        const myResponse = new Promise<any>((resolve, reject) => {
          setTimeout(() => {
            if(control.value === 'snlmilke7@gmail.com'){
              resolve({'emailNotAllowed': true})
            } else {
              resolve(null)
            }
          }, 3000);
        })
        return myResponse;
      }
    
  
  onSubmit() {
    console.log(this.myReactiveForm);
    
    console.log(this.myReactiveForm.value);
    console.log(this.myReactiveForm.value.pname);
    console.log(this.myReactiveForm.value.email);
    console.log(this.myReactiveForm.value.pstatus);
    this.myReactiveForm.reset();
  }
}
