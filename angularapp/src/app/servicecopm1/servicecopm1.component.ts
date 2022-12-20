import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecopm1',
  templateUrl: './servicecopm1.component.html',
  styleUrls: ['./servicecopm1.component.css']
})
export class Servicecopm1Component implements OnInit {
  productss={};

  constructor(private _demoService:DemoService) { }

  ngOnInit() {
  this.productss=this._demoService.products;

  }

  OnSubscribe(){
    this._demoService.display();
  }

}
