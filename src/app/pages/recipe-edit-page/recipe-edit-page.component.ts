import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeApiService} from "../../service/recipe-api/recipe-api.service";
import {IRecipeDetail} from "../../interface/IRecipeDetail";
import {IIngredient} from "../../interface/IIngredient";

@Component({
  selector: 'app-recipe-edit-page',
  templateUrl: './recipe-edit-page.component.html',
  styleUrls: ['./recipe-edit-page.component.css']
})
export class RecipeEditPageComponent implements OnInit {
  date: Date = new Date
  slug: string | null = ''
  recipeDetail: IRecipeDetail = {
    __v: 0,
    _id: "",
    directions: "",
    ingredients: [{_id: "", amount: 0, amountUnit: "", isGroup: false, name: ""}],
    lastModifiedDate: new Date(),
    preparationTime: 0,
    servingCount: 0,
    title: "",
    sideDish: ''
  }
  ingredients:string[]=[]
  ingredient:IIngredient={_id: "", amount: 0, amountUnit: "", isGroup: false, name: ""}
  sideDishes:string[]=[]
  constructor(private route: ActivatedRoute,private router: Router, private RecipeApiService: RecipeApiService, ) {

  }
  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.RecipeApiService.getRecipeDetail(this.slug).subscribe(
      r => {
        this.recipeDetail = r
      }
    )
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
  onSubmit(){
      this.RecipeApiService.editRecipe(this.recipeDetail._id,this.recipeDetail)
  }


  handleOnClick() {
    const ingredient:IIngredient={
      _id: this.ingredient._id,
      name: this.ingredient.name,
      amount: this.ingredient.amount,
      amountUnit: this.ingredient.amountUnit,
      isGroup: this.ingredient.isGroup
    }
    this.recipeDetail.ingredients.push(
      ingredient
    )
  }

  setName($event: string) {
    this.ingredient.name=$event;
  }

  deleteItem(item:IIngredient) {
    const index= this.recipeDetail.ingredients.indexOf(item)
    this.recipeDetail.ingredients.splice(index,1)
  }


}
