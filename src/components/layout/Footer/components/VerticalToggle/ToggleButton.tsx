import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ToggleButtonProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  bgColor: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ 
  title, 
  isOpen, 
  onClick, 
  bgColor 
}) => {
  const bgColorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
    quaternary: 'bg-quaternary'
  };

  return (
    <button
      onClick={onClick}
      className={`${bgColorClasses[bgColor]} w-full flex items-center justify-between px-6 py-4 text-white`}
    >
      <span className="font-bold">{title}</span>
      <ChevronDown 
        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
      />
    </button>
  );
};