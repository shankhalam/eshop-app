import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    CartViewComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule
  ]
})
export class CartModule { }
