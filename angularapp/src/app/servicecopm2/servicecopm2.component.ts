import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecopm2',
  templateUrl: './servicecopm2.component.html',
  styleUrls: ['./servicecopm2.component.css']
})
export class Servicecopm2Component implements OnInit {
  productss={};

  constructor(private _demoService:DemoService) { }

  ngOnInit() {
  this.productss=this._demoService.products;

  }
  OnSubscribe(){
    this._demoService.display();
  }

}
