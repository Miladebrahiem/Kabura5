import React from 'react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

export const ContactButtons: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 mt-6">
      <a
        href="https://wa.me/31852129942"
        className="flex items-center gap-3 bg-primary text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-all group"
      >
        <div className="bg-white rounded-full p-2">
          <MessageCircle className="w-5 h-5 text-primary" />
        </div>
        <span className="font-medium flex-grow">WhatsApp ons</span>
        <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
      </a>
      
      <a
        href="tel:+31852129942"
        className="flex items-center gap-3 bg-tertiary text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-all group"
      >
        <div className="bg-white rounded-full p-2">
          <Phone className="w-5 h-5 text-tertiary" />
        </div>
        <span className="font-medium flex-grow">Bel ons</span>
        <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};