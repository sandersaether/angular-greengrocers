import { Component, OnInit } from '@angular/core';
import { GroceriesService } from '../groceries.service';
import { CartService } from '../cart.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  groceries: Item[] = [];
  filteredGroceries: Item[] = [];

  constructor(private groceriesService: GroceriesService, private cartService: CartService) { }

  ngOnInit(): void {
    this.groceriesService.getGroceries().subscribe(data => {
      this.groceries = data;
      this.filteredGroceries = data; 
    });
  }

  addToCart(item: Item): void {
    this.cartService.addToCart(item);
  }
  SortVegetable() {
  
    const type = 'vegetable'; 
    this.filteredGroceries = this.groceries.filter(item => item.type === type);
  }
  sortFruit() {
  
    const type = 'fruit'; 
    this.filteredGroceries = this.groceries.filter(item => item.type === type);
  }

  sortByPrice() {
    this.filteredGroceries = [...this.filteredGroceries].sort((a, b) => a.price - b.price);
  }

  sortByName() {
    this.filteredGroceries = [...this.filteredGroceries].sort((a, b) => a.name.localeCompare(b.name));
  }
  resetSortAndFilter() {
    this.filteredGroceries = [...this.groceries];
  }

}