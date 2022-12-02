import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-remove-table-content',
  templateUrl: './add-remove-table-content.component.html',
  styleUrls: ['./add-remove-table-content.component.css']
})
export class AddRemoveTableContentComponent implements OnInit {

  name:string;
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
   
}