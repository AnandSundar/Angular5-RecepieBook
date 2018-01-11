import { Component, OnInit } from '@angular/core';
import { Ingredint } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredint[] = [
    new Ingredint('Apples', 5),
    new Ingredint('Tomatos', 10),
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient) {
    this.ingredients.push(ingredient)
  }

}
