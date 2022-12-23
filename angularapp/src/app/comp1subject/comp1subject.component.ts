import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1subject',
  templateUrl: './comp1subject.component.html',
  styleUrls: ['./comp1subject.component.css']
})
export class Comp1subjectComponent implements OnInit {
  constructor(private _utilityService:UtilityService) {

this._utilityService.userName.subscribe(res=>
  this.userName=res)
 

   }

  ngOnInit() {
  }
  userName;


  updateUserName(uname){
    console.log(uname.value);
    //next() is used to send message to an observable i.e usename
    this._utilityService.userName.next(uname.value);
  }
  

}
