import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeApiService} from "../../service/recipe-api/recipe-api.service";
import {IRecipeDetail} from "../../interface/IRecipeDetail";
import {FormBuilder} from "@angular/forms";
import {IIngredient} from "../../interface/IIngredient";

@Component({
  selector: 'app-recipe-edit-page',
  templateUrl: './recipe-edit-page.component.html',
  styleUrls: ['./recipe-edit-page.component.css']
})
export class RecipeEditPageComponent implements OnInit {
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
    sideDish: []
  }

  ingredient:IIngredient={_id: "", amount: 0, amountUnit: "", isGroup: false, name: ""}

  constructor(private route: ActivatedRoute, private RecipeApiService: RecipeApiService, private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.RecipeApiService.getRecipeDetail(this.slug).subscribe(
      r => {
        this.recipeDetail = r
      }
    )
  }
  onSubmit(){
    console.log('submitted form', this.recipeDetail)
  }


  handleOnClick() {
    this.recipeDetail.ingredients.push(
      this.ingredient
    )
  }
}
