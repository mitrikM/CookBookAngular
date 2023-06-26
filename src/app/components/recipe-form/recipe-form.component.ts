import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IRecipeDetail } from '../../interface/IRecipeDetail';
import { IIngredient } from '../../interface/IIngredient';
import slugify from "slugify";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {
  @Input() recipeDetail!: IRecipeDetail;
  @Input() ingredients!: string[];
  @Input() sideDishes!: string[];
  @Output() formSubmit: EventEmitter<IRecipeDetail> = new EventEmitter<IRecipeDetail>();
  ingredient: IIngredient = {
    amount: 0,
    amountUnit: "",
    isGroup: false,
    name: ""
  };

  onSubmit() {
    this.recipeDetail.slug=slugify(this.recipeDetail.title)
    this.formSubmit.emit(this.recipeDetail);
  }

  handleOnClick() {
    const ingredient: IIngredient = {
      name: this.ingredient.name,
      amount: this.ingredient.amount,
      amountUnit: this.ingredient.amountUnit,
      isGroup: this.ingredient.isGroup
    };
    this.recipeDetail.ingredients.push(ingredient);
  }

  setName($event: string) {
    this.ingredient.name = $event;
  }

  deleteItem(item: IIngredient) {
    const index = this.recipeDetail.ingredients.indexOf(item);
    this.recipeDetail.ingredients.splice(index, 1);
  }
}
