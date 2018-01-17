import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new Recipe('A Test Recipe', 'This is a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); //slice with no arguments will return a new array
  }
}