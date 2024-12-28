import React from 'react';
import { Shield } from 'lucide-react';

export const PrivacyHeader: React.FC = () => (
  <div className="text-center mb-12">
    <div className="flex justify-center mb-6">
      <div className="bg-primary/10 p-4 rounded-full">
        <Shield className="w-12 h-12 text-primary" />
      </div>
    </div>
    <h1 className="text-4xl font-bold text-secondary mb-4">Privacybeleid</h1>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Bij Kabura Catering hechten we grote waarde aan de bescherming van uw privacy. 
      In dit privacybeleid leggen we uit hoe we omgaan met uw persoonlijke gegevens.
    </p>
  </div>
);