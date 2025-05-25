import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private cartservice:CartService) {}
openCart(): void {
  const cartItems = this.cartservice.getCart();
  if (cartItems.length > 0) {
    console.log('Cart items:', cartItems);
  } else {
    console.log('Your cart is empty.');
  }
}
}
