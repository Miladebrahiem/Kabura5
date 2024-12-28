import React from 'react';
import type { Dish } from '../../../types/dish';

interface PackageItemProps {
  dish: Dish;
}

export const PackageItem: React.FC<PackageItemProps> = ({ dish }) => (
  <div className="flex justify-between items-center py-2">
    <div className="flex-1">
      <span className="text-gray-600">{dish.name}</span>
    </div>
    <span className="font-medium ml-4">€{dish.price.toFixed(2)}</span>
  </div>
);