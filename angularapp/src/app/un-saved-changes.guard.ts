import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';
export interface CanComponentLeave{
  canLeave:()=>boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnSavedChangesGuard implements CanDeactivate<CanComponentLeave> {

  canDeactivate(component: CanComponentLeave) {
    if(component.canLeave) {
     return component.canLeave();
  }
  return true;
}
}


// export class UnSavedCHnagesGuard implements CanDeactivate<AdduserComponent> {

//   canDeactivate(component: AdduserComponent) {
//     if(component.userName.dirty) {
//       return window.confirm('You have unsaved changes. Are you sure want to navigate?');
//     } else {
//       return true;
//     }
//   }
  
// }