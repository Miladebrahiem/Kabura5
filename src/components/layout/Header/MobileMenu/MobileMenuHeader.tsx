import React from 'react';
import { X } from 'lucide-react';
import { Logo } from '../Logo';

interface MobileMenuHeaderProps {
  onClose: () => void;
}

export const MobileMenuHeader: React.FC<MobileMenuHeaderProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col bg-primary">
      <div className="flex justify-between items-center px-4 py-2">
        <Logo />
        <button 
          onClick={onClose} 
          className="text-white hover:text-gray-200 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="px-4 pb-3">
        <p className="text-white/90 font-medium">
          Authentiek Afghaanse Catering
        </p>
      </div>
    </div>
  );
};