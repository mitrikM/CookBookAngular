import { Pipe, PipeTransform } from '@angular/core';
import { IRecipe } from '../interface/IRecipe';
import { IFilter } from '../interface/IFilter';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  transform(items: IRecipe[], orderByAZ: IFilter , orderByPrep: IFilter): IRecipe[] {

      if(orderByAZ.active && orderByAZ.sort){
       items.sort((a, b) => {
         if (a.title > b.title) return  1;
         if (a.title < b.title) return -1;
         return 0;
       }
       )
      }
      else if(orderByAZ.active && !orderByAZ.sort){
        items.sort((a, b) => {
            if (a.title > b.title) return  -1;
            if (a.title < b.title) return 1;
            return 0;
          }
        )
      }
      else if (orderByPrep.active && orderByPrep.sort) {
        items.sort((a, b) => a.preparationTime - b.preparationTime);
      } else if (orderByPrep.active && !orderByPrep.sort) {
        items.sort((a, b) => b.preparationTime - a.preparationTime);
      }


   return items
  }
}
