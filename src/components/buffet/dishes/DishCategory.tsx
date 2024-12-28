import React from 'react';
import { DishCard } from './DishCard';
import type { Dish } from '../../../types/dish';

interface DishCategoryProps {
  title: string;
  dishes: Dish[];
  selectedDishes: string[];
  onDishToggle: (dishId: string) => void;
}

export const DishCategory: React.FC<DishCategoryProps> = ({
  title,
  dishes,
  selectedDishes,
  onDishToggle
}) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-secondary">{title}</h2>
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
);