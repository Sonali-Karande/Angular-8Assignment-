import { AnimationPlayer } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-ngonchanges',
  templateUrl: './parent-ngonchanges.component.html',
  styleUrls: ['./parent-ngonchanges.component.css']
})
export class ParentNgonchangesComponent implements OnInit {
post=``;
  constructor() { }
  parentPost:any[]=[];
  ngOnInit() {
  }
AddPost(post){
  console.log(this.post);
  this.parentPost.push(post);
}
}
