import React from 'react';
import { DishCard } from '../dishes/DishCard';
import type { Dish } from '../../../types/dish';

interface DishGridProps {
  dishes: Dish[];
  selectedDishes: string[];
  onDishToggle: (dishId: string) => void;
}

export const DishGrid: React.FC<DishGridProps> = ({
  dishes,
  selectedDishes,
  onDishToggle
}) => {
  // Group dishes by category
  const groupedDishes = dishes.reduce((acc, dish) => {
    if (!acc[dish.category]) {
      acc[dish.category] = {};
    }
    
    const subCategory = dish.subCategory || 'default';
    if (!acc[dish.category][subCategory]) {
      acc[dish.category][subCategory] = [];
    }
    
    acc[dish.category][subCategory].push(dish);
    return acc;
  }, {} as Record<string, Record<string, Dish[]>>);

  return (
    <div className="space-y-12">
      {Object.entries(groupedDishes).map(([category, subCategories]) => (
        <div key={category} className="space-y-8">
          <h2 className="text-2xl font-bold text-secondary">{category}</h2>
          
          {Object.entries(subCategories).map(([subCategory, dishes]) => (
            <div key={`${category}-${subCategory}`} className="space-y-4">
              {subCategory !== 'default' && (
                <h3 className="text-xl font-semibold text-gray-700">{subCategory}</h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dishes.map(dish => (
                  <DishCard
                    key={dish.id}
                    dish={dish}
                    isSelected={selectedDishes.includes(dish.id)}
                    onToggle={() => onDishToggle(dish.id)}
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