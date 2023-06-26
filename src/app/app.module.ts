import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';
import {HttpClientModule} from "@angular/common/http";
import {RecipeCardComponent} from './components/recipe-card/recipe-card.component';
import {NgOptimizedImage} from "@angular/common";
import {HomePageComponent} from './pages/home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterPipe} from './filter.pipe';
import {RecipeDetailPageComponent} from './pages/recipe-detail-page/recipe-detail-page.component';
import { RecipeEditPageComponent } from './pages/recipe-edit-page/recipe-edit-page.component';
import { SearchDropdownComponent } from './components/search-dropdown/search-dropdown.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeCreatePageComponent } from './pages/recipe-create-page/recipe-create-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeCardComponent,
    HomePageComponent,
    FilterPipe,
    RecipeDetailPageComponent,
    RecipeEditPageComponent,
    SearchDropdownComponent,
    RecipeFormComponent,
    RecipeCreatePageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
