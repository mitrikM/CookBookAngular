import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IRecipe} from "../../interface/IRecipe";
import {Observable} from "rxjs";
import {IRecipeDetail} from "../../interface/IRecipeDetail";

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {
  private _apiLink='https://exercise.cngroup.dk/api/recipes'
  constructor(private http: HttpClient) {

  }

   getAllRecipes():Observable<IRecipe[]>{
    return this.http.get<IRecipe[]>(this._apiLink)
  }

  getRecipeDetail(slug: string | null){
    return this.http.get<IRecipeDetail>(this._apiLink +`/${slug}`)
  }

}
