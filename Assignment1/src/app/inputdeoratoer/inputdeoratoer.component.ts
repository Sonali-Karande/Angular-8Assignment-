import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputdeoratoer',
  templateUrl: './inputdeoratoer.component.html',
  styleUrls: ['./inputdeoratoer.component.css']
})
export class InputdeoratoerComponent implements OnInit {
@Input() name;
  constructor() { }

  ngOnInit() {
    console.log(this.name);
    
  }

}
