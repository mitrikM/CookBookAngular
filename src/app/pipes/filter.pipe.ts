import { Pipe, PipeTransform } from '@angular/core';
import {IRecipe} from "../interface/IRecipe";
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: IRecipe[], searchText: string ): IRecipe[] {
    if(!items) return []
    if(!searchText) return items
    searchText= searchText.toLowerCase()
    return items.filter(item =>{
      return item.title.toLowerCase().includes(searchText)
    })
  }
}
