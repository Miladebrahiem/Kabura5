import React from 'react';
import { Scale, CheckCircle } from 'lucide-react';
import { Feature } from './Feature';

export const Features: React.FC = () => (
  <div className="mt-12 flex flex-wrap gap-4 md:gap-8">
    <Feature icon={Scale} text="Eerlijke Voorwaarden" />
    <Feature icon={CheckCircle} text="Kwaliteitsgarantie" />
  </div>
);