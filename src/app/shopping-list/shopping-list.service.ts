import { Injectable } from "@angular/core";
import { IIngredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService{
  private ingredients: IIngredient[] = [
    {
      name: 'Apples',
      amount: 5,
    },
    {
      name: 'Tomatoes',
      amount: 10,
    }
  ]
  get getIngredients(){
    return this.ingredients;
  }
}