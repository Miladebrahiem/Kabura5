import React from 'react';
import { ContactForm } from '../components/forms/ContactForm/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Contact</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};