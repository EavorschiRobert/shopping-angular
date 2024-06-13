import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';

import { IIngredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: IIngredient[];
  constructor(private service: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.service.getIngredients();
    this.service.addIngredients.subscribe((newIngredients: IIngredient[]) => {
      this.ingredients = newIngredients;
    })
  }

  onIngredientAdded(ingredient: IIngredient) {
    this.ingredients.push(ingredient);
  }
}

export class TestService{
  statusUpdated = new EventEmitter<string>();

  sendOutput(){
    this.statusUpdated.emit('Alert');
  }
}
class Subscibed{
  constructor(private service: TestService){
    this.service.statusUpdated.subscribe((message: string) => alert(message))
  }
}