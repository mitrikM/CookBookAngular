import {Component, OnInit} from '@angular/core';
import {IRecipeDetail} from "../../interface/IRecipeDetail";
import {Router} from "@angular/router";
import {RecipeApiService} from "../../service/recipe-api/recipe-api.service";

@Component({
  selector: 'app-recipe-create-page',
  templateUrl: './recipe-create-page.component.html',
  styleUrls: ['./recipe-create-page.component.css']
})
export class RecipeCreatePageComponent implements OnInit{
  recipeDetail: IRecipeDetail = {
    __v: 0,
    directions: "",
    ingredients: [{_id: "", amount: 0, amountUnit: "", isGroup: false, name: ""}],
    lastModifiedDate: new Date(),
    preparationTime: 0,
    servingCount: 0,
    sideDish: '',
    slug: '',
    title: ""
  }
  ingredients:string[]=[]
  sideDishes:string[]=[]

  constructor(private router: Router, private RecipeApiService: RecipeApiService ) {

  }

  ngOnInit() {
    this.recipeDetail.ingredients.pop()
    this.RecipeApiService.getAllIngredients().subscribe(
      r => {
        this.ingredients = r
      }
    )
    this.RecipeApiService.getAllSideDishes().subscribe(
      r=>{
        this.sideDishes=r
      }
    )
  }

  async onFormSubmit($event: IRecipeDetail) {
    try {
      await this.RecipeApiService.createRecipe($event)
    }
    catch (e){
      console.log(e)
    }
    finally {
      await this.router.navigateByUrl(`/`)
    }
  }
}
