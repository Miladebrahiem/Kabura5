import React from 'react';
import { DishCard } from './DishCard';
import type { Dish } from '../../types/dish';

interface DishGridProps {
  dishes: Dish[];
  filter: 'all' | 'vegan' | 'vegetarian' | 'meat';
  selectedDishes: string[];
  onDishToggle: (dishId: string) => void;
}

export const DishGrid: React.FC<DishGridProps> = ({
  dishes,
  filter,
  selectedDishes,
  onDishToggle
}) => {
  const filteredDishes = dishes.filter(dish => 
    filter === 'all' ? true : dish.type === filter
  );

  // Group dishes by category
  const groupedDishes = filteredDishes.reduce((acc, dish) => {
    if (!acc[dish.category]) {
      acc[dish.category] = [];
    }
    acc[dish.category].push(dish);
    return acc;
  }, {} as Record<string, Dish[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedDishes).map(([category, dishes]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-bold text-secondary">{category}</h2>
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
  );
};