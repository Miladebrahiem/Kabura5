import React from 'react';
import { UtensilsCrossed, Users, Clock } from 'lucide-react';
import { Feature } from './Feature';

export const Features: React.FC = () => (
  <div className="flex flex-wrap gap-4">
    <Feature 
      icon={UtensilsCrossed} 
      text="Authentieke gerechten" 
    />
    <Feature 
      icon={Users} 
      text="Vanaf 10 personen" 
    />
    <Feature 
      icon={Clock} 
      text="24 uur van tevoren bestellen" 
    />
  </div>
);