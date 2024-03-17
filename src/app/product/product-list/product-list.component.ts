import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
import { CartService } from '../../cart/cart.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products: Product[] = []

  constructor(private productService: ProductService, private cartService: CartService, private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.productService.getProduct().subscribe(data => {
      this.products = data;
    })
  }

  addedToCart(product: Product): void {
    this.cartService.addCart(product).subscribe({
      next: () => {
        this.snackBar.open("Product added Successfully", "", {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration:1000
        })
      }
    });
  }
  

}
