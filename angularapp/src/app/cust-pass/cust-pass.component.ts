import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-pass',
  templateUrl: './cust-pass.component.html',
  styleUrls: ['./cust-pass.component.css']
})
export class CustPassComponent implements OnInit {

  title = "Angular 8 Match password & Confirm Password";
  model: any = {};
  onSubmit(userForm) {
    if (userForm.form.valid) {
      alert("Form submitted sucessfully");
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
