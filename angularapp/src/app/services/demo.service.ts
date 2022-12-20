import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiURL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient){

  }
  getUsersData()
  {
   return this.http.get(this.apiURL);
  }

products=[
  {name:'Laptop',id:'101'},
  {name:'Mobile',id:'102'},
  {name:'Laptop',id:'103'}
]
 
  display()
  {
    alert('subscribed successfully..');
  }
}
