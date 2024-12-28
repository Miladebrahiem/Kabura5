import React from 'react';
import { Badge } from './Badge';
import { Features } from './Features';

export const PrivacyHero: React.FC = () => (
  <div className="bg-primary">
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl">
        <Badge />
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-6">
          Privacybeleid
        </h1>
        <p className="text-lg text-white/90 max-w-2xl">
          Bij Kabura Catering hechten we grote waarde aan de bescherming van uw privacy en persoonlijke gegevens.
        </p>
        <div className="mt-12 flex flex-wrap gap-4 md:gap-8">
          <Feature icon={Shield} text="Veilig & Vertrouwd" />
          <Feature icon={Lock} text="AVG Compliant" />
        </div>
      </div>
    </div>
  </div>
);