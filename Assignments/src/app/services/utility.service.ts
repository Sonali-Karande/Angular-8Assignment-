import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

 
  constructor() { }
 //userName=new Subject<any>();//it sets does the initial value
  userName=new BehaviorSubject('Ungular UI Developer');//it sets the initial value
  public personObject: BehaviorSubject<any> =
  new BehaviorSubject<any>([{ personId:1, name: 'Sonali',salary:1000},
  { personId: 2, name: 'Nandini',salary:2000 },
  { personId: 3, name: 'Kavya',salary:21000 }
  
]);

  personId;
  name;
  salary;
  employee=new Subject<Object>();
}

