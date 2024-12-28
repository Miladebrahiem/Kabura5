import React from 'react';
import { Beef, Carrot, Leaf, Wheat } from 'lucide-react';
import type { DishType } from '../../../types/dish';

interface DishTypeIconProps {
  type: DishType;
  className?: string;
}

export const DishTypeIcon: React.FC<DishTypeIconProps> = ({ type, className = 'w-4 h-4' }) => {
  const icons = {
    meat: { icon: Beef, color: 'bg-primary' },
    vegetarian: { icon: Carrot, color: 'bg-secondary' },
    vegan: { icon: Leaf, color: 'bg-tertiary' },
    glutenfree: { icon: Wheat, color: 'bg-quaternary' }
  };

  const { icon: Icon, color } = icons[type];

  return (
    <div className={`${color} rounded-full p-1.5`}>
      <Icon className={`${className} text-white`} />
    </div>
  );
};