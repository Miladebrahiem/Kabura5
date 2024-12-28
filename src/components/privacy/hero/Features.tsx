import React from 'react';
import { Shield, Lock } from 'lucide-react';
import { Feature } from './Feature';

export const Features: React.FC = () => (
  <div className="flex flex-wrap gap-4 md:gap-8">
    <Feature icon={Shield} text="Veilig & Vertrouwd" />
    <Feature icon={Lock} text="AVG Compliant" />
  </div>
);