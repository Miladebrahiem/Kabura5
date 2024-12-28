import React from 'react';
import { Shield, Lock } from 'lucide-react';

export const PrivacyHero: React.FC = () => (
  <div className="bg-primary">
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-primary mb-8">
          <Lock className="w-4 h-4" />
          <span className="text-sm font-medium">Privacy & Veiligheid</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Privacybeleid
        </h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Bij Kabura Catering hechten we grote waarde aan de bescherming van uw privacy en persoonlijke gegevens.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-gray-600">Veilig & Vertrouwd</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm">
            <Lock className="w-5 h-5 text-primary" />
            <span className="text-gray-600">AVG Compliant</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);