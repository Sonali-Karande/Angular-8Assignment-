import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
todaysDate=new Date();
obser;
curPipePrice:number=10000;
curPipePrice1:number=789000
obj={
  id:1,name:'sonali'
}
  constructor(private _utylityService:UtilityService) { 
    this.obser=this._utylityService.userName;
  }

  ngOnInit() {
  }

}
