import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IRecipeDetail} from "../../interface/IRecipeDetail";
import {RecipeApiService} from "../../service/recipe-api/recipe-api.service";
import * as MarkdownIt from 'markdown-it';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent implements OnInit {
  slug: string | null = '';
  recipeDetail:IRecipeDetail={
    __v: 0,
    _id: "",
    directions: "",
    ingredients: [{_id: "", amount: 0, amountUnit: "", isGroup: false, name: ""}],
    lastModifiedDate: new Date,
    preparationTime: 0,
    servingCount: 0,
    title: "",
    sideDish:[]
  }
  constructor(private route: ActivatedRoute,private  router: Router, private RecipeApiService:RecipeApiService) {


  }
  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.RecipeApiService.getRecipeDetail(this.slug).subscribe(
      r=>{this.recipeDetail=r}
    )
  }
  navigate(){
    this.router.navigateByUrl(`/recipes/${this.slug}/edit`)
  }

}
