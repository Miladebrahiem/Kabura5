import React from 'react';

interface PackageSelectorProps {
  isCustom: boolean;
  onToggle: () => void;
}

export const PackageSelector: React.FC<PackageSelectorProps> = ({ isCustom, onToggle }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-lg border-2 border-primary p-1">
        <button
          onClick={() => !isCustom && onToggle()}
          className={`px-4 py-2 rounded-md transition-colors ${
            isCustom 
              ? 'bg-primary text-white' 
              : 'text-primary hover:bg-primary/10'
          }`}
        >
          Custom Buffet
        </button>
        <button
          onClick={() => isCustom && onToggle()}
          className={`px-4 py-2 rounded-md transition-colors ${
            !isCustom 
              ? 'bg-primary text-white' 
              : 'text-primary hover:bg-primary/10'
          }`}
        >
          Standaard Pakketten
        </button>
      </div>
    </div>
  );
};