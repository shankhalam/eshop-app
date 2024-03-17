import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiCartUrl = environment.apiUrl + '/cart';
  private apiCheckoutUrl = environment.apiUrl + '/checkout';

  constructor(private http: HttpClient) { }

  addCart(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiCartUrl, product);
  }

  getCart(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiCartUrl);
  }

  clearCart(): Observable<Product[]>{
    return this.http.delete<Product[]>(this.apiCartUrl);
  }

  cartCheckOut(product: Product[]): Observable<void>{
    return this.http.post<void>(this.apiCheckoutUrl, product);
  }

}
