import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IRecipe} from "../../interface/IRecipe";
import {Observable} from "rxjs";
import {IRecipeDetail} from "../../interface/IRecipeDetail";

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {
  private _apiLink = 'https://exercise.cngroup.dk/api/recipes'

  constructor(private http: HttpClient) {

  }

  getAllRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this._apiLink)
  }

  getRecipeDetail(slug: string | null) {
    return this.http.get<IRecipeDetail>(this._apiLink + `/${slug}`)
  }

  getAllIngredients() {
    return this.http.get<string[]>(this._apiLink + `/ingredients`)
  }

  getAllSideDishes() {
    return this.http.get<string[]>(this._apiLink + '/side-dishes')
  }

  editRecipe(id: string | null, recipe: IRecipeDetail) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(this._apiLink + `/${id}`, recipe, {headers}).subscribe((r) => {
        console.log('Post sucs', r)
      }
    )
  }
}
