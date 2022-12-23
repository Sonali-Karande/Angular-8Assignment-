import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp3subject',
  templateUrl: './comp3subject.component.html',
  styleUrls: ['./comp3subject.component.css']
})
export class Comp3subjectComponent implements OnInit {

  constructor(private _utilityService:UtilityService) {

    this._utilityService.userName.subscribe(res=>
      this.userName=res)
       }
    
      ngOnInit() {
      }
      userName;
    
      updateUserName(uname){
        console.log(uname.value);
        this._utilityService.userName.next(uname.value);
      }
    
}
