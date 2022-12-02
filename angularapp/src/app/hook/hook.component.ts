import { Component,  DoCheck,  Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit,OnChanges,DoCheck {
  @Input() userid: number;
  @Input() names:string;
  @Input() parentData:string;
  @Input() product:Product;
  pi;
    constructor() {
      this.pi = 3.14;
      console.log("HooksComponent constructor called");
      //console.log(this.parentData);
      
     }
  ngDoCheck(): void {
    console.log(`ngDoCheck called`);
    
  }
  
    ngOnChanges(changes: SimpleChanges): void {
  console.log(this.parentData);
  
      console.log("HooksComponent ngOnChanges called");
      for (const propname in changes) {
        const prop = changes[propname];
  
        const {previousValue, currentValue, firstChange} = prop;
  
        console.log(`Prop name ${propname}`);
        console.log(`Prev  value ${previousValue}`);
        console.log(`Current value ${currentValue}`);
        console.log(`First change ${firstChange}`);
        console.log("---------------")
  
      }
      
    }
  
     // hooks 
    ngOnInit() {
      console.log("HooksComponent ngOnInit called")
    }
  
  }
  