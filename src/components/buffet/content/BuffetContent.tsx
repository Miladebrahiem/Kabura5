import React, { useState } from 'react';
import { FilterBar } from './FilterBar';
import { DishGrid } from './DishGrid';
import { CustomPackage } from './CustomPackage';
import type { DishFilter, Dish } from '../../../types/dish';

interface BuffetContentProps {
  dishes: Dish[];
}

export const BuffetContent: React.FC<BuffetContentProps> = ({ dishes }) => {
  const [selectedFilter, setSelectedFilter] = useState<DishFilter>('all');
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);

  const handleDishToggle = (dishId: string) => {
    setSelectedDishes(prev => 
      prev.includes(dishId) 
        ? prev.filter(id => id !== dishId)
        : [...prev, dishId]
    );
  };

  const filteredDishes = dishes.filter(dish => 
    selectedFilter === 'all' ? true : dish.type === selectedFilter
  );

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-[1400px] mx-auto">
        <FilterBar 
          selectedFilter={selectedFilter} 
          onFilterChange={setSelectedFilter} 
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <DishGrid
              dishes={filteredDishes}
              selectedDishes={selectedDishes}
              onDishToggle={handleDishToggle}
            />
          </div>
          <div className="lg:col-span-1">
            <CustomPackage 
              selectedDishes={dishes.filter(dish => selectedDishes.includes(dish.id))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};