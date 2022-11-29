import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.css']
})
export class EmployeeFilterComponent{
@Input()
  all:number=0;
@Input()

Male:number=0;
@Input()

Female:number=0;


}
