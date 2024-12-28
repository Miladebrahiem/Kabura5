import React from 'react';
import { Beef, Carrot, Leaf, Wheat, Users } from 'lucide-react';
import type { DishFilter } from '../../../types/dish';

interface FilterBarProps {
  selectedFilter: DishFilter;
  onFilterChange: (filter: DishFilter) => void;
  peopleCount: number;
  onPeopleCountChange: (count: number) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedFilter,
  onFilterChange,
  peopleCount,
  onPeopleCountChange
}) => {
  const filters = [
    { id: 'all', label: 'Alles', icon: null },
    { id: 'meat', label: 'Vlees', icon: Beef },
    { id: 'vegetarian', label: 'Vegetarisch', icon: Carrot },
    { id: 'vegan', label: 'Vegan', icon: Leaf },
    { id: 'glutenfree', label: 'Glutenvrij', icon: Wheat }
  ] as const;

  return (
    <div className="flex flex-col md:flex-row items-start gap-6">
      {/* Filters */}
      <div className="flex-1 flex flex-wrap gap-4">
        {filters.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onFilterChange(id as DishFilter)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
              ${selectedFilter === id 
                ? 'bg-secondary text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
              }
            `}
          >
            {Icon && (
              <div className={`${selectedFilter === id ? 'bg-white/20' : 'bg-tertiary'} rounded-full p-1`}>
                <Icon className={`w-4 h-4 ${selectedFilter === id ? 'text-white' : 'text-white'}`} />
              </div>
            )}
            {label}
          </button>
        ))}
      </div>

      {/* People Count Input */}
      <div className="w-full md:w-auto bg-white p-4 rounded-lg border-2 border-tertiary">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Aantal personen voor prijsberekening
        </label>
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-tertiary" />
          <input
            type="number"
            min="1"
            value={peopleCount}
            onChange={(e) => onPeopleCountChange(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-20 border-0 focus:ring-0 text-center"
            aria-label="Aantal personen"
          />
          <span className="text-gray-600">personen</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Minimaal {10} personen vereist voor bestelling
        </p>
      </div>
    </div>
  );
};