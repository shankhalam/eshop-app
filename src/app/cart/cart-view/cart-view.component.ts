import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {

  cartItems: Product[] = []
  totalPrice: number = 0

  constructor(private cartService: CartService){}
  ngOnInit(): void {
     this.cartService.getCart().subscribe(data => {
      this.cartItems = data
      this.totalPrice = this.cartTotal()
    })
  }
  cartTotal(): number{
    let total = 0
    for (let item of this.cartItems){
      total += item.price
    }
    return total
  }
}
