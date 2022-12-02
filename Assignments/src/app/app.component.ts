import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignments In Angular 8';
data1="Sonali";
data={
  id:123,
  name:"Sanjana",
  Age:32,
  salary:60000
}
foods: string[] = [];

  getDataFromChild(value) {
    console.log(value);
    this.foods.push(value);
  }
  
  newArrayOfCourses:any[]=[];
 

  getCourcesFromChild(value){
this.newArrayOfCourses=value;

  }

}