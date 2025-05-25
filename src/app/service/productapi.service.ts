import { Injectable } from '@angular/core';
import { Product } from '../model/productmodel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {
apiurl='https://fakestoreapi.com/products';

constructor(private http:HttpClient) { }

getproducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.apiurl);
}
}
