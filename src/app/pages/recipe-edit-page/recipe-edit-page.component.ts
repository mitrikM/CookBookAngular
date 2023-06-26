import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeApiService} from "../../service/recipe-api/recipe-api.service";
import {IRecipeDetail} from "../../interface/IRecipeDetail";

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
    slug: '',
    directions: "",
    ingredients: [{_id: "", amount: 0, amountUnit: "", isGroup: false, name: ""}],
    lastModifiedDate: new Date(),
    preparationTime: 0,
    servingCount: 0,
    title: "",
    sideDish: ''
  }
  ingredients:string[]=[]
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


 async onFormSubmit($event: IRecipeDetail) {
    try {
    await this.RecipeApiService.editRecipe($event._id,$event)

    }
    catch (e){
      console.log(e)
    }
    finally {
      await this.router.navigateByUrl(`/`)
    }
  }
}

