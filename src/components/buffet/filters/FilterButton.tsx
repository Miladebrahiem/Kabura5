import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FilterButtonProps {
  label: string;
  icon?: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  icon: Icon,
  isActive,
  onClick
}) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
      ${isActive 
        ? 'bg-primary text-white' 
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }
    `}
  >
    {Icon && <Icon className="w-4 h-4" />}
    {label}
  </button>
);