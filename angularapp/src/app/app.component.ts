import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  empInfo:Employee=new Employee();
  empObject=[]; //array

  constructor() {
   

    this.empObject.push({ id:111,name:'Sonali',salary:90000,age:32,gender:'Female'});
    this.empObject.push({ id:122,name:'Swati',salary:80000,age:31,gender:'Female'});
    this.empObject.push({ id:133,name:'Yogesh',salary:60000,age:35,gender:'Male'});
    this.empObject.push({ id:144,name:'Vedika',salary:87000,age:30,gender:'Female'});
    this.empObject.push({ id:155,name:'Mayuresh',salary:60000,age:20,gender:'Male'});

}
}
