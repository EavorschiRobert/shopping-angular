import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  private shoppingService : ShoppingListService;
  ingredients = [];
  constructor(service: ShoppingListService){
    this.shoppingService = service;
    this.ingredients = this.shoppingService.getIngredients;
  }
}
