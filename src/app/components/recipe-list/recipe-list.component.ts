import {Component, Input} from '@angular/core';
import {IRecipe} from "../../interface/IRecipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() recipes!:IRecipe[];
  searchInput: string=''
  constructor() {
  }
}
