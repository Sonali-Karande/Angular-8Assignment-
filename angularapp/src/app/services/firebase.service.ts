import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FireBasePost } from '../models/firebasepost';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url='https://angular-crud-operation-d2337-default-rtdb.firebaseio.com/';
  constructor(private _httpClient:HttpClient) {
    
   }
   createPost()
   {
    let postData={
      title:'this is the angular crud',
      content:'this is the  firebase  crud operation with post'
    }
   return this._httpClient.post(this.url+'post.json',postData);
   }
   createPostDataReactiveForm(fireBasePost:FireBasePost){
    return this._httpClient.post(this.url+'reactiveformposts.json',fireBasePost);

  }
}
