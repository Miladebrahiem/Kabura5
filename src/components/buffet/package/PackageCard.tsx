import React from 'react';
import { Users, ArrowRight } from 'lucide-react';
import { DietaryTypes } from './DietaryTypes';
import { CateringDetailsModal } from '../content/modal/CateringDetailsModal';
import type { BuffetPackage } from '../../../types/package';

interface PackageCardProps {
  package: BuffetPackage;
  peopleCount?: number;
}

export const PackageCard: React.FC<PackageCardProps> = ({ 
  package: pkg,
  peopleCount = 10
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const totalPrice = pkg.price * peopleCount;

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-transparent hover:border-primary transition-colors">
        {pkg.imageUrl && (
          <div className="aspect-video">
            <img
              src={pkg.imageUrl}
              alt={pkg.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.name}</h3>
              <DietaryTypes types={pkg.dietaryTypes} />
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-primary">€{totalPrice.toFixed(2)}</div>
              <div className="text-sm text-gray-500">€{pkg.price.toFixed(2)} p.p.</div>
            </div>
          </div>

          <p className="text-gray-600 mb-4">{pkg.description}</p>

          <div className="flex items-center gap-2 text-gray-500 mb-6">
            <Users className="w-5 h-5" />
            <span>Vanaf {pkg.minPeople} personen</span>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="w-full flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            <span>Selecteer pakket</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <CateringDetailsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        selectedDishes={[]} // Package dishes will be handled differently
        totalPrice={totalPrice}
        packageName={pkg.name}
      />
    </>
  );
};