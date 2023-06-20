export interface IRecipe {
  _id:string,
  title:string,
  preparationTime:string,
  slug: string,
  lastModifiedDate: Date,
  sideDish: string[]
}
