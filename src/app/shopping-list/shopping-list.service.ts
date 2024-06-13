import { EventEmitter } from "@angular/core";
import { IIngredient } from "../shared/ingredient.model";

export class ShoppingListService{
  addIngredients = new EventEmitter<IIngredient[]>();
  private ingredients: IIngredient[] = [
    // {name: 'Apples', amount: 5},
    // {name: 'Tomatoes', amount: 10},
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  setIngredients(ingredient: IIngredient){
    this.ingredients.push(ingredient);
    this.addIngredients.emit(this.ingredients.slice());
  }
  setMultipleIngredients(ingredients: IIngredient[]){
    this.ingredients = [...this.ingredients, ...ingredients];
    this.addIngredients.emit(this.ingredients.slice());
  }
}