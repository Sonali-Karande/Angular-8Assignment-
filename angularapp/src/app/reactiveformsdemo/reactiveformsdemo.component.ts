import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CanComponentLeave } from '../un-saved-changes.guard';

@Component({
  selector: 'app-reactiveformsdemo',
  templateUrl: './reactiveformsdemo.component.html',
  styleUrls: ['./reactiveformsdemo.component.css']
})
export class ReactiveformsdemoComponent implements OnInit,CanComponentLeave {
  myReactiveForm: FormGroup;
  constructor(private _fb:FormBuilder) {
    this.createForm();
  
  }
  canLeave():boolean{
    if(this.myReactiveForm.dirty)
    {
      return window.confirm('You have some unsaved changes.save it before leaving');
    }
    return true;
  }


  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails' : {
    //       'username': 'Codemind1122',
    //       'email': 'test@gmail.com'
    //       },
    //       'course': 'HTML',
    //       'gender': 'Male'
    //       })
    //       }, 3500); 

          setTimeout(() => {
            this.myReactiveForm.patchValue({
              'userDetails' : {
                'username': 'Codemind1122',
                'email': 'test@gmail.com'}
              }
                )}, 3500);

  }
  genders=[
    {id:`1`,value:`Male`},
    {id:`2`,value:`Female`}
  ];
  createForm() {
    // this.myReactiveForm = new FormGroup({
    //   // 'username':new FormControl('CodemindTechnology',Validators.required),
      
    //   'userDetails':new FormGroup({
    //     'username': new FormControl('', [Validators.required,this.naNames.bind(this)]),
    //     'email': new FormControl('', [Validators.required,Validators.email],this.NaEmails)
    //   }),
    //   'course': new FormControl('Angular'),
    //   'gender': new FormControl('Male'),
    //   'skills':new FormArray([
    //     new FormControl(null,Validators.required)
    //   ])
    // })
    this.myReactiveForm=this._fb.group({
      userDetails:this._fb.group({
        username:['',Validators.required] ,
        email:['',Validators.required] 

      }),
      course:['Angular'],
      gender:['Male'],
      skills:this._fb.array([])
    })
    
  }
  notAllowedNames=['codemind','technology'];
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
        if(control.value === 'codemindtechnology@gmail.com'){
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000);
    })
    return myResponse;
  }




 submitted:boolean=false;
 
  onSubmit() {
    this.submitted=true;

    console.log(this.myReactiveForm);


  }
  OnAddSkill(){
(<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }
 removeFormControl(index:number):void{
  (<FormArray>this.myReactiveForm.get('skills')).removeAt(index);
 }

}