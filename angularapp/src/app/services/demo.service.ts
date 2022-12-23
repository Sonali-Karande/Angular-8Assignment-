import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  //apiURL = 'https://jsonplaceholder.typicode.com/users';
  apiURL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient){

  }
  getUsersData()
  {
    let users='users';
   return this.http.get(this.apiURL+users);
  }
  getDataPosts(){
    let posts='posts';
    return this.http.get(this.apiURL+posts);
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
