import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Component({
  selector: 'app-crudwithfirebase',
  templateUrl: './crudwithfirebase.component.html',
  styleUrls: ['./crudwithfirebase.component.css']
})
export class CrudwithfirebaseComponent implements OnInit {
@ViewChild('userForm',{static:false}) userForm:NgForm;
 users=[
  // {name:'sonali',technology:'Angular'},
  // {name:'kavya',technology:'HTML,CSS'}
 ];
 editMode=false;
 editUserId;
fecthing=false;

 url='https://angularsonali-default-rtdb.firebaseio.com/user.json';
constructor(private http:HttpClient) { }

  ngOnInit() {
    this.fetchUser();
  }

  onAddUser(userData:User)
  {
    if(this.userForm.valid){
     // console.log(userData);
     if (this.editMode) {
      //console.log('https://angularsonali-default-rtdb.firebaseio.com/user/'+this.editUserId+'.json');
      this.http.put<User>('https://angularsonali-default-rtdb.firebaseio.com/user/'+this.editUserId+'.json',userData).subscribe(res=>{console.log(res);
    this.fetchUser();  
  
    });
  
     }
     else{
//  this.editMode=true;

      this.users.push(userData);
      this.http.post<User>(this.url,userData).subscribe(res=>{console.log(res);
      });
     }
      
    }
    else{
     // console.log(this.userForm);
      let key=Object.keys(this.userForm.controls);
      //console.log(key);
      key.filter(data=>{
        //console.log(data);
      let control=this.userForm.controls[data];
        //console.log(control);
        if (control.errors!=null) {
          control.markAsTouched();

        }
      })
      
    }
 
 this.editMode=false;

  }
  fetchUser(){
    this.fecthing=true;
    this.http.get<User>(this.url)
    .pipe(map(resData=>{
      console.log(resData);
      const userArray=[];
      for (const key in resData) {
      //  console.log(key);
      //  console.log(resData[key]);
      if(resData.hasOwnProperty)
    {
       userArray.push({userId:key,...resData[key]})
      }
    }
    return userArray;
    }))
    .subscribe(res=>{
      console.log('feaching users',res);
      this.users=res;
    this.fecthing=false;

    })
   
  }
  onEditUser(userId,index){
    // console.log(userId);
    //console.log(this.users[index]);
this.editMode=true;
this.editUserId=userId;

    this.userForm.setValue({

      name:this.users[index].name,
      technology:this.users[index].technology
    })
   
  }
  onDeleteUser(userId){
    if(confirm('Do Want to delete this user?')){
      console.log(userId);
      //console.log('https://angularsonali-default-rtdb.firebaseio.com/user/'+userId+'.json');
     
      
      return this.http.delete('https://angularsonali-default-rtdb.firebaseio.com/user/'+userId+'.json').subscribe(()=>{
        this.fetchUser()
      });
    }
  }
}
