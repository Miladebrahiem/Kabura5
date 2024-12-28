import React, { useState } from 'react';
import { FilterBar } from './filters/FilterBar';
import { DishGrid } from './dishes/DishGrid';
import { CustomPackage } from './package/CustomPackage';
import { StandardPackages } from './package/StandardPackages';
import { PackageSelector } from './package/PackageSelector';
import type { DishFilter, Dish } from '../../types/dish';

interface BuffetContentProps {
  dishes: Dish[];
}

export const BuffetContent: React.FC<BuffetContentProps> = ({ dishes }) => {
  const [selectedFilter, setSelectedFilter] = useState<DishFilter>('all');
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [isCustomPackage, setIsCustomPackage] = useState(true);
  const [peopleCount, setPeopleCount] = useState(10);

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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-[1400px] mx-auto">
        <PackageSelector 
          isCustom={isCustomPackage}
          onToggle={() => setIsCustomPackage(!isCustomPackage)}
        />
        
        {isCustomPackage ? (
          <>
            <FilterBar 
              selectedFilter={selectedFilter} 
              onFilterChange={setSelectedFilter}
              peopleCount={peopleCount}
              onPeopleCountChange={setPeopleCount}
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2">
                <DishGrid
                  dishes={filteredDishes}
                  selectedDishes={selectedDishes}
                  onDishToggle={handleDishToggle}
                  peopleCount={peopleCount}
                />
              </div>
              <div className="lg:col-span-1">
                <CustomPackage 
                  selectedDishes={dishes.filter(dish => selectedDishes.includes(dish.id))}
                  peopleCount={peopleCount}
                />
              </div>
            </div>
          </>
        ) : (
          <StandardPackages peopleCount={peopleCount} />
        )}
      </div>
    </div>
  );
};