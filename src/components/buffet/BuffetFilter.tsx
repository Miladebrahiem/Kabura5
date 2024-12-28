import React from 'react';
import { Leaf, Carrot, Beef } from 'lucide-react';

interface BuffetFilterProps {
  selectedFilter: 'all' | 'vegan' | 'vegetarian' | 'meat';
  onFilterChange: (filter: 'all' | 'vegan' | 'vegetarian' | 'meat') => void;
}

export const BuffetFilter: React.FC<BuffetFilterProps> = ({ 
  selectedFilter, 
  onFilterChange 
}) => {
  const filters = [
    { id: 'all', label: 'Alles', icon: null },
    { id: 'vegan', label: 'Vegan', icon: Leaf },
    { id: 'vegetarian', label: 'Vegetarisch', icon: Carrot },
    { id: 'meat', label: 'Vlees', icon: Beef }
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {filters.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onFilterChange(id as any)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
            ${selectedFilter === id 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }
          `}
        >
          {Icon && <Icon className="w-4 h-4" />}
          {label}
        </button>
      ))}
    </div>
  );
};