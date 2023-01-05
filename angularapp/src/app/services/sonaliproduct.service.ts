import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SonaliproductService {
url='https://angularsonali-default-rtdb.firebaseio.com/products.json';

private headers=new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }
  saveProducts(Products:any){
    //return this.http.post(this.url,Products);
  return this.http.put(this.url,Products,{headers:this.headers});
   }
  fecthProducts(){
    return this.http.get(this.url);
  }
  fecthDataTitle(){
    return this.http.get('https://angularsonali-default-rtdb.firebaseio.com/dataTitle.json');
  }
  deleteProduct(){//we can't delete the single product using this
    return this.http.delete(this.url);
  }
 }
