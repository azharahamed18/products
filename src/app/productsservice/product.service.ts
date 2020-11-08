import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'https';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  saveProducts(products:any[]){
    return this.http.post('https://shopping-c192f.firebaseio.com/',products)
  }
}
