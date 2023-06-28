import {Component, Input} from '@angular/core';
import {IRecipe} from "../../interface/IRecipe";
import {IFilter} from "../../interface/IFilter";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() recipes!:IRecipe[];
  searchInput: string=''
  showFilter:boolean=false
  orderByAZ:IFilter={
    active:false,
    sort: true
  }
  orderByPrep:IFilter={
    active:false,
    sort: true
  }
  constructor() {
  }




  orderBy() {
    if(!this.orderByAZ.active){
      this.orderByPrep.active=false
      this.orderByAZ.active=true
      this.orderByAZ.sort=true
      return
    }
    this.orderByAZ.sort=!this.orderByAZ.sort
  }

  setOrderByPrep() {
    if(!this.orderByPrep.active){
      this.orderByPrep.active=true
      this.orderByPrep.sort=true
      this.orderByAZ.active=false
      return
    }
    this.orderByPrep.sort=!this.orderByPrep.sort
  }
}
