import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-add-remove-table-content',
  templateUrl: './add-remove-table-content.component.html',
  styleUrls: ['./add-remove-table-content.component.css']
})
export class AddRemoveTableContentComponent implements OnInit {

  data:any[]=[];
    constructor() { }


    ngOnInit() {
    }
    add(i){
      this.data.push({name:i});

    }
    Onclear(){
      this.name='';
    }
    remove(indexValue){
  this.data.splice(indexValue,1);
    }
    studInfo:Student[]=[];
    name:string="";

    degree:string;
      passOutYear:Date;
      address:string;
      mobile:number;
      email:string;
      addData(a,b,c,d,e,f){
        this.studInfo.push({name:a,degree:b,passOutYear:c,address:d,mobile:e,email:f});
        }
        remove2(indexValue){
          this.studInfo.splice(indexValue,1)
        }
        clear()
        {
          this.name='';
          this.degree='';
          this.passOutYear=null;
          this.mobile=null;
          this.email='';
        }
     
    

}