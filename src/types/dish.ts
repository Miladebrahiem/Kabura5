export type DishType = 'vegan' | 'vegetarian' | 'meat' | 'glutenfree';
export type DishFilter = 'all' | DishType;

export interface DishCategory {
  main: string;
  sub?: string;
  subSub?: string;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  type: DishType;
  category: string;
  subCategory?: string;
  subSubCategory?: string;
  imageUrl?: string;
  history?: string;
  minPeople?: number;
}