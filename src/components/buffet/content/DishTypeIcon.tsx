import React from 'react';
import { Leaf, Carrot, Beef } from 'lucide-react';
import type { DishType } from '../../../types/dish';

interface DishTypeIconProps {
  type: DishType;
  className?: string;
}

export const DishTypeIcon: React.FC<DishTypeIconProps> = ({ type, className = 'w-4 h-4' }) => {
  const icons = {
    vegan: { icon: Leaf, color: 'text-green-500' },
    vegetarian: { icon: Carrot, color: 'text-orange-500' },
    meat: { icon: Beef, color: 'text-red-500' }
  };

  const { icon: Icon, color } = icons[type];

  return <Icon className={`${className} ${color}`} />;
};