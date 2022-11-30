import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { Courses } from '../models/cources';

@Component({
  selector: 'app-outputdecorator',
  templateUrl: './outputdecorator.component.html',
  styleUrls: ['./outputdecorator.component.css']
})
export class OutputdecoratorComponent implements OnInit {
  // @Output() empEvent:EventEmitter<string>=new EventEmitter<string>();
  @Output() coursesEvent:EventEmitter<Object>=new EventEmitter<Object>();
  cources:Courses[]=[];
 

  constructor() {
    this.cources.push({srNo:1,courseName:"Angular",courseFee:2000,courseDuration:"2 Months"});
    this.cources.push({srNo:2,courseName:"React",courseFee:2000,courseDuration:"2 Months"});
    this.cources.push({srNo:3,courseName:"Java",courseFee:2000,courseDuration:"2 Months"});
    this.cources.push({srNo:4,courseName:".Net",courseFee:2000,courseDuration:"2 Months"});
   }

  ngOnInit() {
  }
  onGetObject(){
    this.coursesEvent.emit(this.cources);
  }

}
