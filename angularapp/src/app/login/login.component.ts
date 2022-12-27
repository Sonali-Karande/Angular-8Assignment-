import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  checkUser(uname,pwd){
if (uname=='admin'&&pwd=='admin') {
  this._route.navigate(['product/laptop'])
}
  }

}
