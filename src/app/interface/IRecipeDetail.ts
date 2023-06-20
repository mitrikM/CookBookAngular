export interface IRecipeDetail {
  _id:string,
  title: string,
  preparationTime: number,
  servingCount: number,
  directions: string,
  ingredients: {
    _id:string,
    isGroup: boolean,
    amountUnit: string,
    amount: number,
    name: string
  }
  lastModifiedDate: Date,
  __v: number
}
