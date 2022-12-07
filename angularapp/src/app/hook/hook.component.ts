import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,  ContentChild,  DoCheck,  ElementRef,  Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit,OnChanges,DoCheck,AfterContentInit ,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() userid: number;
  @Input() names:string;
  @Input() parentData:string;
  @Input() product:Product;
  @ContentChild("child",{static:false}) contentChild:ElementRef;
  @ViewChild("childhook",{static:false}) ViewChild:ElementRef;
  pi;
  counter;
  num:number=1;
    constructor() {
      this.pi = 3.14;
      console.log(" constructor called");
    
     }
  ngOnDestroy(): void {
    console.log(`ngOnDestroy called`);
    clearInterval(this.counter);
    
  }
  ngAfterViewChecked(): void {
    console.log(" ngAfterViewChecked called");

    this.ViewChild.nativeElement.setAttribute(`style`,`color:${this.parentData}`)

  }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit called`,this.ViewChild);
    this.ViewChild.nativeElement.setAttribute(`style`,`color:${this.parentData}` )
    
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
    this.contentChild.nativeElement.setAttribute(`style`,`color:${this.parentData}`)
    
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called",this.contentChild);
    //this.contentChild.nativeElement.setAttribute(`style`,`color:green`)
      this.contentChild.nativeElement.setAttribute(`style`,`color:${this.parentData}`)
  
  }
  ngDoCheck(): void {
    console.log(`ngDoCheck called`);
    console.log("ngAfterContentInit called",this.contentChild);
    
  }
    
    ngOnChanges(changes: SimpleChanges): void {
  console.log(this.parentData);
      //console.log(this.parentData);
  
      console.log(" ngOnChanges called");
      // for (const propname in changes) {
      //   const prop = changes[propname];
  
      //   const {previousValue, currentValue, firstChange} = prop;
  
      //   console.log(`Prop name ${propname}`);
      //   console.log(`Prev  value ${previousValue}`);
      //   console.log(`Current value ${currentValue}`);
      //   console.log(`First change ${firstChange}`);
      //   console.log("---------------")
  
      // }
      
    }
   
     // hooks 
    ngOnInit() {
      //api
      console.log(" ngOnInit called");
      this.counter=setInterval(()=>{
        this.num=this.num+1;
        console.log(this.num);
        
      },1000)
    }
    
  
  }
  