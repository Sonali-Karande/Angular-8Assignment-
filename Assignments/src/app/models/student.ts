// import { AbstractControl } from "@angular/forms";


export class Student{
     name:string;
        degree:string;
          passOutYear:any;
          address:string;
          mobile:any;
          email:string;
}

// export function passwordMatch(password:string,confirmPassword:string){
// return function(form:AbstractControl)
// {
//     const passwordValue=form.get(password)?.value
//     const confirmPasswordValue=form.get(confirmPassword)?.value
// if (passwordValue == confirmPasswordValue) {
//     return null;
// }
// return {passwordMissmatchError:true}
// }
// }