import type { DishType } from './dish';

export interface BuffetPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  minPeople: number;
  imageUrl?: string;
  dishIds: string[];
  category: string;
  dietaryTypes: DishType[];
}

export interface PackageCategory {
  name: string;
  description: string;
  packages: BuffetPackage[];
}