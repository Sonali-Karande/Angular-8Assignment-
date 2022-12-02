import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirassgn',
  templateUrl: './dirassgn.component.html',
  styleUrls: ['./dirassgn.component.css']
})
export class DirassgnComponent implements OnInit {
// showSecret=false;
 showSecret1=false;
// log=[];
showSecret = false;
log = [];
  constructor() { }

  ngOnInit() {
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1) ;
  }

//   onToggleDetails()
//   {
// this.showSecret1=!this.showSecret1;
// this.log.push(this.log.length+1)
//   }
  

}
