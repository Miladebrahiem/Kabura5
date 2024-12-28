import React, { useState } from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { CateringDetailsModal } from './CateringDetailsModal';
import type { Dish } from '../../../types/dish';

interface CustomPackageProps {
  selectedDishes: Dish[];
}

export const CustomPackage: React.FC<CustomPackageProps> = ({ selectedDishes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalPrice = selectedDishes.reduce((sum, dish) => sum + dish.price, 0);

  return (
    <>
      <div className="sticky top-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-2 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Uw Buffet Samenstelling</h2>
          </div>

          {selectedDishes.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Selecteer gerechten om uw buffet samen te stellen
            </p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {selectedDishes.map(dish => (
                  <div key={dish.id} className="flex justify-between items-center">
                    <span className="text-gray-600">{dish.name}</span>
                    <span className="font-medium">€{dish.price.toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center font-bold">
                    <span>Totaal</span>
                    <span className="text-primary">€{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
              >
                <span>Offerte aanvragen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      <CateringDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDishes={selectedDishes}
        totalPrice={totalPrice}
      />
    </>
  );
};