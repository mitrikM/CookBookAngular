export interface IRecipeDetail {
  _id?:string ,
  title: string,
  preparationTime: number,
  slug:string,
  servingCount: number,
  directions: string,
  sideDish: string,
  ingredients: [{
    _id?:string,
    isGroup: boolean,
    amountUnit: string,
    amount: number,
    name: string
  }],
  lastModifiedDate: Date,
  __v: number
}
