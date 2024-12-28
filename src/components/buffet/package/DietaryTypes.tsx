import React from 'react';
import { Beef, Carrot, Leaf, Wheat } from 'lucide-react';
import type { DishType } from '../../../types/dish';

interface DietaryTypesProps {
  types?: DishType[];
}

export const DietaryTypes: React.FC<DietaryTypesProps> = ({ types = [] }) => {
  const typeIcons = {
    meat: { icon: Beef, color: 'bg-primary', label: 'Vlees opties' },
    vegetarian: { icon: Carrot, color: 'bg-tertiary', label: 'Vegetarische opties' },
    vegan: { icon: Leaf, color: 'bg-quaternary', label: 'Vegan opties' },
    glutenfree: { icon: Wheat, color: 'bg-secondary', label: 'Glutenvrij opties' }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {types.map(type => {
        const { icon: Icon, color, label } = typeIcons[type];
        return (
          <div
            key={type}
            className="flex items-center gap-1.5 text-sm"
            title={label}
          >
            <div className={`${color} rounded-full p-1`}>
              <Icon className="w-3 h-3 text-white" />
            </div>
            <span className="text-gray-600 text-xs">{label}</span>
          </div>
        );
      })}
    </div>
  );
};