import React from 'react';
import { Leaf, Carrot, Beef, Plus, Check } from 'lucide-react';
import type { Dish } from '../../types/dish';

interface DishCardProps {
  dish: Dish;
  isSelected: boolean;
  onToggle: () => void;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, isSelected, onToggle }) => {
  const typeIcons = {
    vegan: { icon: Leaf, color: 'text-green-500' },
    vegetarian: { icon: Carrot, color: 'text-orange-500' },
    meat: { icon: Beef, color: 'text-red-500' }
  };

  const TypeIcon = typeIcons[dish.type].icon;

  return (
    <div className={`
      relative bg-white rounded-xl shadow-sm border-2 transition-colors
      ${isSelected ? 'border-primary' : 'border-transparent hover:border-gray-200'}
    `}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
            <div className="flex items-center gap-2">
              <TypeIcon className={`w-4 h-4 ${typeIcons[dish.type].color}`} />
              <span className="text-sm text-gray-500 capitalize">{dish.type}</span>
            </div>
          </div>
          <div className="text-xl font-bold text-primary">€{dish.price}</div>
        </div>
        <p className="text-gray-600 mb-4">{dish.description}</p>
        <button
          onClick={onToggle}
          className={`
            w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
            ${isSelected 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }
          `}
        >
          {isSelected ? (
            <>
              <Check className="w-4 h-4" />
              Geselecteerd
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              Toevoegen aan buffet
            </>
          )}
        </button>
      </div>
    </div>
  );
};