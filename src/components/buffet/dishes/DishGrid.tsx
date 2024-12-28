import React from 'react';
import { DishCard } from './DishCard';
import type { Dish } from '../../../types/dish';

interface DishGridProps {
  dishes: Dish[];
  selectedDishes: string[];
  onDishToggle: (dishId: string) => void;
  peopleCount: number;
}

export const DishGrid: React.FC<DishGridProps> = ({
  dishes,
  selectedDishes,
  onDishToggle,
  peopleCount
}) => {
  // Group dishes by category hierarchy
  const groupedDishes = dishes.reduce((acc, dish) => {
    const mainCat = dish.category;
    const subCat = dish.subCategory || 'Other';
    
    if (!acc[mainCat]) {
      acc[mainCat] = {};
    }
    if (!acc[mainCat][subCat]) {
      acc[mainCat][subCat] = [];
    }

    acc[mainCat][subCat].push(dish);
    return acc;
  }, {} as Record<string, Record<string, Dish[]>>);

  return (
    <div className="space-y-12">
      {Object.entries(groupedDishes).map(([mainCategory, subCategories]) => (
        <div key={mainCategory} className="space-y-8">
          <h2 className="text-2xl font-bold text-secondary">{mainCategory}</h2>
          
          {Object.entries(subCategories).map(([subCategory, dishes]) => (
            <div key={`${mainCategory}-${subCategory}`} className="space-y-6">
              {subCategory !== 'Other' && (
                <h3 className="text-xl font-semibold text-gray-700">{subCategory}</h3>
              )}
              <div className="grid grid-cols-2 gap-6">
                {dishes.map(dish => (
                  <DishCard
                    key={dish.id}
                    dish={dish}
                    isSelected={selectedDishes.includes(dish.id)}
                    onToggle={() => onDishToggle(dish.id)}
                    peopleCount={peopleCount}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};