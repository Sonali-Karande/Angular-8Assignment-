import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
 // userName=new Subject<any>();//it sets does the initial value
  userName=new BehaviorSubject('Ungular UI Developer');//it sets the initial value
  // public personObject: BehaviorSubject<any> =
  // new BehaviorSubject<any>({ personId: 1, name: 'john doe' });
}

