import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    {
      name: 'A Test Recipe',
      description: 'This is simply a test',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      ingredients: [
        {
          name: 'Apple',
          amount: 5,
        },
        {
          name: 'Tomatoes',
          amount: 10,
        }
      ]
    },
    {
      name: 'Another Recipe',
      description: 'This is another simply a test',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      ingredients: [
        {
          name: 'Apple',
          amount: 5,
        }
      ]
    },
  ];
  getRecipes(){
    return this.recipes.slice();
  }

}