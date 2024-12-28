import React from 'react';
import { Menu, X } from 'lucide-react';

interface DiscoverButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const DiscoverButton: React.FC<DiscoverButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-secondary text-white px-4 sm:px-6 py-2.5 rounded-lg hover:bg-opacity-90 transition-all"
    >
      {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      <span className="font-medium text-sm sm:text-base">
        {isOpen ? 'Sluiten' : 'Ontdek ons'}
      </span>
    </button>
  );
};