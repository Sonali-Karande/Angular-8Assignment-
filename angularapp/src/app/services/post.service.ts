import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  getPostsss():Observable<any> {
    return this.httpClient.get(`${devURL}posts`);
  }
  getPostsPhotos():Observable<any> {
    return this.httpClient.get(`${devURL}photos`);
  }
  getPostById(id){
    return this.httpClient.get(`${devURL}posts/`+id);
  }
  deletePostById(id)
  {
    return this.httpClient.delete(`${devURL}posts/`+id);
  }
}
