import React from 'react';
import { CallbackForm } from './CallbackForm';

export const TopRow: React.FC = () => {
  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="max-w-[4.4xl]">
          <div className="mb-12">
            <h2 className="text-white text-3xl font-bold mb-4">
              Wilt u teruggebeld worden?
            </h2>
            <p className="text-white/80 text-lg">
              Laat uw gegevens achter, dan nemen we zo snel mogelijk contact met u op via telefoon of e-mail, afhankelijk van uw voorkeur.
            </p>
          </div>
          <CallbackForm />
        </div>
      </div>
    </div>
  );
};