import React from 'react';
import { Utensils } from 'lucide-react';

export const BuffetHero: React.FC = () => (
  <div className="bg-primary">
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-primary mb-8">
          <Utensils className="w-4 h-4" />
          <span className="text-sm font-medium">Authentieke Buffetten</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Afghaanse Buffetten
        </h1>
        
        <p className="text-lg text-white/90 max-w-2xl mb-8">
          Ontdek onze authentieke Afghaanse buffetten en stel uw eigen culinaire ervaring samen. 
          Van traditionele voorgerechten tot heerlijke hoofdgerechten.
        </p>
      </div>
    </div>
  </div>
);