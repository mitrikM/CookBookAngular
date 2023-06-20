import {Component, Input} from '@angular/core';
import {IRecipe} from "../../interface/IRecipe";
import {RecipeApiService} from "../../service/recipe-api/recipe-api.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  recipes:IRecipe[]=[]
  constructor( RecipeApiService:RecipeApiService) {
    RecipeApiService.getAllRecipes().subscribe(data => {
      this.recipes=data
    })
  }
}
