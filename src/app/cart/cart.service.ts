import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = environment.apiUrl + '/cart';

  constructor(private http: HttpClient) { }

  addCart(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product);
  }

  getCart(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  clearCart(): Observable<Product[]>{
    return this.http.delete<Product[]>(this.apiUrl);

  }

}
