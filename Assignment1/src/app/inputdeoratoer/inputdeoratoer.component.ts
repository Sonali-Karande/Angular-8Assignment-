import { Component, Input, OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputdeoratoer',
  templateUrl: './inputdeoratoer.component.html',
  styleUrls: ['./inputdeoratoer.component.css']
})
export class InputdeoratoerComponent implements OnInit {
@Input() name;
@Output() foodevent:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log(this.name);
    
  }
  addtofood(value) {
    // foodevent is nothing but your custom event (foodevent)
        this.foodevent.emit(value);
      }
  


}
    