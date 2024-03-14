import { Injectable } from '@angular/core';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Item[] = [];

  addToCart(item: Item): void {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({...item, quantity: 1});
    }
  }

  removeFromCart(item: Item): void {
    this.items = this.items.filter(i => i.id !== item.id);
  }

  adjustQuantity(item: Item, change: number): void {
    const existingItem = this.items.find(i => i.id === item.id);
    if (!existingItem) return;

    existingItem.quantity += change;
    if (existingItem.quantity <= 0) {
      this.removeFromCart(existingItem);
    }
  }

  getItems(): Item[] {
    return this.items;
  }

  getTotalCost(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
