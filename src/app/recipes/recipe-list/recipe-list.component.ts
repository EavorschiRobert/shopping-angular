import { Component } from '@angular/core';
import { IRecipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  private recipeService: RecipesService;
  recipes: IRecipe[];
  constructor(service: RecipesService){
    this.recipeService = service;
    this.recipes = this.recipeService.getRecipes;
  }
}
