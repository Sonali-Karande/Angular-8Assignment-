import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router, private _authService: AuthService) { }
  ngOnInit() {
  }
  checkUser(uname,pwd){
// if (uname=='admin'&&pwd=='admin') {
//   this._route.navigate(['product/laptop'])
// }
var output = this._authService.checkUserNameandPassword(uname, pwd);

if(output == true) {
 window.alert('Login succesfully');
 this._route.navigate(['product']);
} else {
 window.alert('Invalid username and password');
}
  }

}
