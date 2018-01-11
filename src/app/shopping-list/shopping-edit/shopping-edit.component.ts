import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Ingredint } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredint>();

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredint(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
