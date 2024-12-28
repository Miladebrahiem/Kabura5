import React from 'react';
import { X } from 'lucide-react';

interface ModalHeaderProps {
  dishCount: number;
  totalPrice: number;
  onClose: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  dishCount,
  totalPrice,
  onClose
}) => (
  <div className="flex justify-between items-center p-6 border-b">
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Offerte aanvragen</h2>
      <p className="text-gray-600 mt-1">
        {dishCount} gerechten geselecteerd • €{totalPrice.toFixed(2)}
      </p>
    </div>
    <button 
      onClick={onClose}
      className="text-gray-400 hover:text-gray-500"
    >
      <X className="w-6 h-6" />
    </button>
  </div>
);