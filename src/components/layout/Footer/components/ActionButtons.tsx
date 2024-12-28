import React from 'react';
import { MessageCircle, Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ActionButtons: React.FC = () => {
  const buttonBaseClass = "flex items-center gap-3 text-white px-6 py-4 rounded-lg hover:bg-opacity-90 transition-all group flex-1 min-w-[200px]";

  return (
    <div className="flex flex-wrap gap-4 w-full">
      <a
        href="https://wa.me/31852129942"
        className={`${buttonBaseClass} bg-tertiary`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-white rounded-full p-2">
          <MessageCircle className="w-5 h-5 text-tertiary" />
        </div>
        <span className="font-medium whitespace-nowrap">WhatsApp ons</span>
      </a>

      <Link
        to="/offerte-aanvragen"
        className={`${buttonBaseClass} bg-quaternary`}
      >
        <div className="bg-white rounded-full p-2">
          <FileText className="w-5 h-5 text-quaternary" />
        </div>
        <span className="font-medium whitespace-nowrap">Offerte aanvragen</span>
      </Link>

      <a
        href="tel:+31852129942"
        className={`${buttonBaseClass} bg-primary`}
      >
        <div className="bg-white rounded-full p-2">
          <Phone className="w-5 h-5 text-primary" />
        </div>
        <span className="font-medium whitespace-nowrap">Bel ons</span>
      </a>
    </div>
  );
};