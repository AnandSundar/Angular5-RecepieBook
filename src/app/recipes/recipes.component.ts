import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
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
