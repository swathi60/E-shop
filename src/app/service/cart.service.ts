import { Injectable } from "@angular/core";
import { Product } from "../model/productmodel";

@Injectable({
  providedIn: 'root'
})
export class CartService {
    cart: Product[] = [];
  constructor() { }
  addToCart(product: Product): void {
    this.cart.push(product);
    console.log(`${product.title} added to cart.`);
  }


   getCart(): Product[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
  }
}
