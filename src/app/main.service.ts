import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient ) {
  
   }


   public getProducts(): Observable<any> {
    return this.http.get('../assets/data/products.json');
}
/*   public getProducts(): Observable<any> {
 
    let productResponse = new Product();
    return this.http.get('../assets/data/products.json');

   } */

 
}
