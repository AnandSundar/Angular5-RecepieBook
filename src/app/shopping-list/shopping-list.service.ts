import { Ingredint } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredint[]>();
  private ingredients:Ingredint[] = [
    new Ingredint('Apples', 5),
    new Ingredint('Tomatos', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredint) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}