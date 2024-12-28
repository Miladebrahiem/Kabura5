import React from 'react';
import { Badge } from './Badge';
import { Features } from './Features';

export const TermsHero: React.FC = () => (
  <div className="bg-primary">
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl">
        <Badge />
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-6">
          Algemene Voorwaarden
        </h1>
        <p className="text-lg text-white/90 max-w-2xl">
          Onze algemene voorwaarden zijn opgesteld om u duidelijkheid te geven over onze dienstverlening en wederzijdse verplichtingen.
        </p>
        <Features />
      </div>
    </div>
  </div>
);