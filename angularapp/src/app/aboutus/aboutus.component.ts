import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
export class Employee{
  id:number;
  name:string;
  dept:string;
  desig:string;
  sal:number;

}


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private _empDataService:UtilityService) { }

  ngOnInit() {
    this._empDataService.employee.subscribe(res=>{
      console.log(res);
     
      this.arrayFaculty.push(res);


    });

   }

  //userName:any;
  arrayFaculty=[];
  arrayNew:Employee[]=[]
  




  onUpdate(eid,ename,ecmp,edept,erole){
   
      let arrayNew:Employee={id:eid,name:ename,dept:ecmp,desig:edept,sal:erole}
      this._empDataService.employee.next(arrayNew);

    }

}

