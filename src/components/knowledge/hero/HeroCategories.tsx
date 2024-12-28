import React from 'react';

export const HeroCategories: React.FC = () => (
  <div className="flex flex-wrap gap-4 mb-12">
    <div className="bg-tertiary px-6 py-3 rounded-lg">
      <span className="text-white font-medium">Culinaire Tips</span>
    </div>
    <div className="bg-quaternary px-6 py-3 rounded-lg">
      <span className="text-white font-medium">Culturele Inzichten</span>
    </div>
  </div>
);