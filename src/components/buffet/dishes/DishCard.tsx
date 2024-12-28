import React, { useState } from 'react';
import { Plus, Check, Info, X } from 'lucide-react';
import { DishTypeIcon } from './DishTypeIcon';
import type { Dish } from '../../../types/dish';

interface DishCardProps {
  dish: Dish;
  isSelected: boolean;
  onToggle: () => void;
  peopleCount: number;
}

export const DishCard: React.FC<DishCardProps> = ({ 
  dish, 
  isSelected, 
  onToggle,
  peopleCount 
}) => {
  const [showHistory, setShowHistory] = useState(false);
  const totalPrice = dish.price * peopleCount;

  return (
    <div className={`
      relative bg-white rounded-xl shadow-sm border-2 transition-colors h-full
      ${isSelected ? 'border-primary' : 'border-transparent hover:border-gray-200'}
    `}>
      <div className="p-6 flex flex-col h-full">
        {dish.imageUrl && (
          <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
            <img
              src={dish.imageUrl}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
            <div className="flex items-center gap-2">
              <DishTypeIcon type={dish.type} />
              <span className="text-sm text-gray-500 capitalize">{dish.type}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-primary">€{totalPrice.toFixed(2)}</div>
            <div className="text-sm text-gray-500">€{dish.price.toFixed(2)} p.p.</div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 flex-grow">{dish.description}</p>

        <div className="flex gap-2 mt-auto">
          <button
            onClick={onToggle}
            className={`
              flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
              ${isSelected 
                ? 'bg-secondary text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }
            `}
          >
            {isSelected ? (
              <>
                <Check className="w-4 h-4" />
                <span>Geselecteerd</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Toevoegen</span>
              </>
            )}
          </button>

          {dish.history && (
            <button
              onClick={() => setShowHistory(true)}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium bg-tertiary text-white hover:bg-tertiary/90 transition-colors"
            >
              <Info className="w-4 h-4" />
              <span className="sr-only">Geschiedenis</span>
            </button>
          )}
        </div>
      </div>

      {/* History Modal */}
      {showHistory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-semibold">{dish.name} - Geschiedenis</h4>
              <button 
                onClick={() => setShowHistory(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">{dish.history}</p>
            <button
              onClick={() => setShowHistory(false)}
              className="w-full bg-secondary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Sluiten
            </button>
          </div>
        </div>
      )}
    </div>
  );
};