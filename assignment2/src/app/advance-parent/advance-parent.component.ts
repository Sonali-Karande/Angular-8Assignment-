import { Component, EventEmitter, OnInit,Input,Output } from '@angular/core';
import { Customers } from '../Models/customers';
import { Employee } from '../Models/employee';

@Component({
  selector: 'app-advance-parent',
  templateUrl: './advance-parent.component.html',
  styleUrls: ['./advance-parent.component.css']
})
export class AdvanceParentComponent implements OnInit {
  emp: Employee[]=[
    {empId: 1, empName: 'Suhas', empDept: 'IT', empSalary: '70000', empCompany: 'TCS' },
    {empId: 2, empName: 'Suraj', empDept: 'Finance', empSalary: '65000', empCompany: 'Wipro' },
    {empId: 3, empName: 'Akash', empDept: 'IT', empSalary: '80000', empCompany: 'TCS' },
    {empId: 4, empName: 'Aniket', empDept: 'HR', empSalary: '60000', empCompany: 'Infosys' },
    {empId: 5, empName: 'Sanket', empDept: 'Finance', empSalary: '70000', empCompany: 'Wipro' },
  ];
  foods: string[] = [];
  getDataFromChild(value){
console.log(value);
this.foods.push(value);
  }
 
customers: Customers[]=[];
getCustomersData(value){
  console.log("this is parent", this.customers.length);
  console.log("this is parent", value);
  this.customers.push(value);
    
}


  constructor() { }
  ngOnInit() {
  
    
    
  }

}
