import { Injectable } from "@angular/core";
import { IRecipe } from "./recipes.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService{
  private recipes: IRecipe[] = [
    {
      name: 'A Test Recipe',
      description: 'This is simple a test',
      imagePath: 'https://th.bing.com/th/id/R.f24925c32338f75d4bf9aa6b7fa92419?rik=Z1TufBsUemW13g&riu=http%3a%2f%2f2.bp.blogspot.com%2f-bQaogmf-BdU%2fUTzXnwCN5pI%2fAAAAAAAAIdo%2f6c4A8YCYaKI%2fs1600%2f20121212-201154-1-700px.jpg&ehk=k0%2fJnJjnW9okOW4txXRITKj%2f6IfLyPmEHcpRTmkRcvE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    },
    {
      name: 'A Test Recipe',
      description: 'This is simple a test',
      imagePath: 'https://th.bing.com/th/id/R.f24925c32338f75d4bf9aa6b7fa92419?rik=Z1TufBsUemW13g&riu=http%3a%2f%2f2.bp.blogspot.com%2f-bQaogmf-BdU%2fUTzXnwCN5pI%2fAAAAAAAAIdo%2f6c4A8YCYaKI%2fs1600%2f20121212-201154-1-700px.jpg&ehk=k0%2fJnJjnW9okOW4txXRITKj%2f6IfLyPmEHcpRTmkRcvE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    },
  ];
  addRecipe(newRecipe: IRecipe){
    this.recipes.push(newRecipe);
  }
  get getRecipes(){
    return this.recipes;
  }
}