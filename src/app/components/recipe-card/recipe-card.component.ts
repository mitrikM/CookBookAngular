import {Component, Input} from '@angular/core';
import {IRecipe} from "../../interface/IRecipe";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  @Input() recipe!:IRecipe;
  constructor(private router: Router) {}
  navigate() {
    this.router.navigateByUrl(`/recipes/${this.recipe.slug}`)
  }
}
