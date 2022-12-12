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
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required)
    })
  }
  onSubmit() {
    console.log(this.myReactiveForm);

  }

}
