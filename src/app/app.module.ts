import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import {HttpClientModule} from "@angular/common/http";
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import {NgOptimizedImage} from "@angular/common";
import { HomePageComponent } from './pages/home-page/home-page.component';
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './filter.pipe';
import { RecipeDetailPageComponent } from './pages/recipe-detail-page/recipe-detail-page.component';
import {provideRouter, withComponentInputBinding} from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeCardComponent,
    HomePageComponent,
    FilterPipe,
    RecipeDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
