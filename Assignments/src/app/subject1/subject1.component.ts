import { Component, OnInit } from '@angular/core';
import { Emp } from '../models/student';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.css']
})
export class Subject1Component implements OnInit {
 
  empArr=[];
emp={};

  constructor(private _utilityService: UtilityService) {


  }

  ngOnInit() {
    this._utilityService.employee.subscribe(empData=>{
      console.log(empData);
      this.emp=empData;

      console.log('result' ,empData)
      console.log('Employee',this.emp)

    });
    
  }



  updateUserName(a, b,c) {
    console.log(a.value,b.value,c.value);
    //next method is used to pass the value or data to observable
    var  empArr=[a.value,b.value,c.value]
    this._utilityService.employee.next(empArr);
  
  
  }
}
