import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
//import { EventEmitter } from 'protractor';
import { EventEmitter } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-inputdeoratoer',
  templateUrl: './inputdeoratoer.component.html',
  styleUrls: ['./inputdeoratoer.component.css']
})
export class InputdeoratoerComponent implements OnInit,OnChanges {
@Input() name;
@Input()studInfo:Student;
@Output() foodevent:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges called`,changes);
    
  }

  ngOnInit() {
    console.log(this.name);
    
  }
  
  //fun call  once user enter text box value
  addtofood(value) {
    // step 2 foodevent is nothing but your custom event (foodevent)
        this.foodevent.emit(value);
      }
  

 
}
    