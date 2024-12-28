import React from 'react';
import { Clock, Users, UtensilsCrossed } from 'lucide-react';

export const BuffetIntro: React.FC = () => (
  <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
    <h2 className="text-2xl font-bold text-secondary mb-6">
      Welkom bij Kabura Catering
    </h2>
    
    <p className="text-gray-600 mb-8">
      Bij Kabura Catering bieden wij authentieke Afghaanse buffetten aan die uw gasten zullen verrassen. 
      Onze gerechten worden met zorg bereid volgens traditionele recepten, met de beste ingrediënten.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
        <UtensilsCrossed className="w-5 h-5 text-primary" />
        <span className="text-gray-700">Authentieke gerechten</span>
      </div>
      
      <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
        <Users className="w-5 h-5 text-primary" />
        <span className="text-gray-700">Vanaf 10 personen</span>
      </div>
      
      <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
        <Clock className="w-5 h-5 text-primary" />
        <span className="text-gray-700">24 uur van tevoren bestellen</span>
      </div>
    </div>
  </div>
);