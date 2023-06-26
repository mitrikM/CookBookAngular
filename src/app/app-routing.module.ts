import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeDetailPageComponent} from "./pages/recipe-detail-page/recipe-detail-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {RecipeEditPageComponent} from "./pages/recipe-edit-page/recipe-edit-page.component";
import {RecipeCreatePageComponent} from "./pages/recipe-create-page/recipe-create-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'recipes/:slug',
    component: RecipeDetailPageComponent
  },
  {
    path: 'recipes/:slug/edit',
    component: RecipeEditPageComponent,
  },
  {
    path:'create-recipe',
    component: RecipeCreatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
