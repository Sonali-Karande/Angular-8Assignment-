import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from, interval, Observable } from 'rxjs';
import { FireBasePost } from '../models/firebasepost';
import { FirebaseService } from '../services/firebase.service';
import { CanComponentLeave } from '../un-saved-changes.guard';
import { filter, map, take, takeLast, toArray } from 'rxjs/operators';
@Component({
  selector: 'app-reactiveformsdemo',
  templateUrl: './reactiveformsdemo.component.html',
  styleUrls: ['./reactiveformsdemo.component.css']
})
export class ReactiveformsdemoComponent implements OnInit,CanComponentLeave {
  myReactiveForm: FormGroup;
  firebasePost:FireBasePost;
  constructor(private _fb:FormBuilder,private _firebaseService:FirebaseService) {
    this.createForm();
  
  }
  canLeave():boolean{
    if(this.myReactiveForm.dirty)
    {
      return window.confirm('You have some unsaved changes.save it before leaving');
    }
    return true;
  }
serverDtata=[];

  ngOnInit() {
    // this._firebaseService.getPostDataFirebase().subscribe(res=>{
    //   console.log('getPostDataFirebase',res);
     // this.myReactiveForm.value.push(res);
    //   this.serverDtata.push(res);
    //   console.log('serverrrrrrrrrrdata',this.serverDtata);
    //   this.serverDtata=res.id;
    //   console.log('idddd',this.serverDtata);
      
      
      
    //  }) 
    console.log("==========from operator==============================================");
    
    const data=from(this._firebaseService.users) ;//from operator is used to convert into obserrable

    // here we get seprate object from array
    data.subscribe(res=>{ console.log('example of From Operator',res);})

    //pipe to seprate the perticular key or value from array========================
    console.log("===================pipe operator===============================");
    
    data.pipe(map(x=>x.name+' data')).subscribe(res=>{
      console.log('example of pipe operator:-',res);

     })

    //filter operator===================================================
    console.log('==========filter operator=========================================');
    
    const data1=from(this._firebaseService.users) ;

    data1.pipe(filter(u =>u.gender=='female'),
      toArray() // it will seprate into seperate array
    ).subscribe(res=>{
      console.log('data from filter operator',res);
      
    })

    //Take operator==========================================================
    console.log('===============take operator============================================');
    
//take operator
const source1=interval(1000);
source1.pipe(
  take(5)).subscribe(res=>{
    console.log('interval example',res);
    
  })

    console.log('===============last take operator==========================================');
    //take last===============================================================
    let randomname=['sonali','codemind','angular','html','javascript','typescript'];
     const source=from(randomname);

     source.pipe(
      takeLast(2)
     ).subscribe(res=>{
      console.log('take last operator',res);
      
     })

    // to get data from firebase===============================================
    // this._firebaseService.getPostDataFirebase().subscribe(res=>{
    //   console.log('DATA FROM FIREBASE',res);
    //   // this.arrayDataFromFirebase.push(res);
    //   this.arrayDataFromFirebase=res

    //  console.log('DATA FROM FIREBASE1',this.arrayDataFromFirebase);
      
    // }) 


    // manipulating the data using pipe==================================
    console.log('===========manipulating the data using pipe===================');
    
    this._firebaseService.getPostDataFirebase().pipe(
      map(responseData=>{
        const postArray=[];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            postArray.push({...responseData[key],id:key})
          }
        }
        return postArray;
      })
      
    )
    .subscribe(res=>{
      console.log('after manipuliting data',res);
      this.serverDtata.push(res);
      console.log('serverrrrrrrrrrdata',this.serverDtata);
      
    })
       
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
 arrayStudent=[];

  onSubmit() {
    this.submitted=true;
   // console.log(this.myReactiveForm);
    //console.log(this.myReactiveForm['controls'].userDetails['controls'].username.value);
    
    this.firebasePost=new FireBasePost();
 this.firebasePost.username=this.myReactiveForm['controls'].userDetails['controls'].username.value;
 this.firebasePost.email=this.myReactiveForm['controls'].userDetails['controls'].email.value;
 this.firebasePost.course=this.myReactiveForm['controls'].course.value;
 this.firebasePost.gender=this.myReactiveForm['controls'].gender.value;
 this.firebasePost.skills=this.myReactiveForm['controls'].skills.value;
console.log('Firebase Post Classs',this.firebasePost);


 this._firebaseService.createPostDataReactiveForm(this.firebasePost).subscribe(res=>{
   console.log('Post from Reactive Form',res);
    
 })
  //this.arrayStudent.push(this.myReactiveForm.value);
    // this.arrayStudent=this.myReactiveForm.value;
//  this.myReactiveForm.reset();

  }
  OnAddSkill(){
(<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }
 removeFormControl(index:number):void{
  (<FormArray>this.myReactiveForm.get('skills')).removeAt(index);
 }

}