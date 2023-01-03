import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FireBasePost } from '../models/firebasepost';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url='https://angular-crud-operation-d2337-default-rtdb.firebaseio.com/';
  constructor(private _httpClient:HttpClient) {
    
   }
   users:any[]=[{
    id:'101',name:'sonali',gender:'female'},
   {id:'102',name:'yogesh',gender:'male'},
   {id:'103',name:'arjun',gender:'male'}
   ];
   createPost()
   {
    let postData={
      title:'this is the angular crud',
      content:'this is the  firebase  crud operation with post'
    }
   return this._httpClient.post(this.url+'posts.json',postData);
   }
   createPostDataReactiveForm(fireBasePost:FireBasePost){
    return this._httpClient.post(this.url+'posts.json',fireBasePost);

  }
  getPostDataFirebase():Observable<any>{
    return this._httpClient.get(this.url+ 'posts.json')
  }
}
