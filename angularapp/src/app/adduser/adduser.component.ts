import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from '../un-saved-changes.guard';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements CanComponentLeave{
  userName: FormControl = new FormControl();

  constructor() { }
  canLeave():boolean{
    if(this.userName.dirty)
    {
      return window.confirm('You have some unsaved changes.save it before leaving');
    }
    return true;
  }


}
