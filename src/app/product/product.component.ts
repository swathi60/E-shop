import { Component } from '@angular/core';
import { ProductapiService } from '../service/productapi.service';
import { Product } from '../model/productmodel';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product',
  imports: [MatCardModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products:Product[] = [];
  expandedProductId: number | null = null;
constructor(private serviceproducts:ProductapiService, private cartservice:CartService){}
ngOnInit() {
  this.serviceproducts.getproducts().subscribe({
    next: (data: Product[]) => {
      this.products = data;
    }
  });
}

addToCart(product: Product): void {
  this.cartservice.addToCart(product);
}
toggleDescription(productId: number): void {
  this.expandedProductId = this.expandedProductId === productId ? null : productId;
}

isTruncated(description: string): boolean {
  return description.length > 100; // adjust length threshold as needed
}
}