import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { log } from 'util';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  @Input() recipeElFull = '';
  constructor() { }

  ngOnInit() {
  }

  onClickRecipeElFull(event) {
    // console.log(event);
    this.recipeElFull = event;

  }

}
