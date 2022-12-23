import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2subject',
  templateUrl: './comp2subject.component.html',
  styleUrls: ['./comp2subject.component.css']
})
export class Comp2subjectComponent implements OnInit {

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
