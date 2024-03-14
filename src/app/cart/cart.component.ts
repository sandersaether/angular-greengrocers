import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Item[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  adjustQuantity(item: Item, change: number) {
    this.cartService.adjustQuantity(item, change);
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

  getTotalCost(): number {
    return this.cartService.getTotalCost();
  }
}
