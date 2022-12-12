import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription1 } from '../models/subscription';

@Component({
  selector: 'app-templateformsass',
  templateUrl: './templateformsass.component.html',
  styleUrls: ['./templateformsass.component.css']
})
export class TemplateformsassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  defualtValue1:string='Advanced';
  submitted:boolean=false;
  sub =new Subscription1();
  msg:string="";
  show:boolean=false;
  onSubmit(subForm:NgForm){
    this.submitted = true;
    this.sub.userName=subForm.value.userName;
    this.sub.email=subForm.value.email;
    this.sub.subscription=subForm.value.Subscriptions;
    this.sub.password=subForm.value.password;
   
  
    
    console.log(subForm.value.userName);
    console.log(subForm.value.email);
    console.log(subForm.value.Subscriptions);
    console.log(subForm.value.password);
    console.log(subForm);
    
    if (!subForm.valid) {
      this.msg="Form is not valid ???";
    
      console.log("Form is not valid");
    }
    else
    {
      this.msg="Form submitted successfully....";
      console.log("Form submitted successfully....");
}
subForm.reset();
subForm.controls[`Subscriptions`].setValue(`Advanced`);


  }

}