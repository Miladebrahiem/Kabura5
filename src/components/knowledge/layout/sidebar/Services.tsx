import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  { name: 'Bedrijfscatering', href: '/bedrijfscatering' },
  { name: 'Bruiloftscatering', href: '/bruiloftscatering' },
  { name: 'Evenementencatering', href: '/evenementencatering' },
  { name: 'Catering aan huis', href: '/catering-aan-huis' },
  { name: 'Mehmandaar', href: '/mehmandaar-gastheer-gastvrouw' },
  { name: 'Muzikanten inhuren', href: '/muzikanten-inhuren' }
];

export const Services: React.FC = () => (
  <div className="bg-secondary rounded-xl shadow-sm p-6">
    <h2 className="text-xl font-semibold text-white mb-6">
      Onze Diensten
    </h2>
    
    <div className="space-y-4">
      {services.map((service) => (
        <Link
          key={service.href}
          to={service.href}
          className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors group"
        >
          <span className="text-white/90">{service.name}</span>
          <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" />
        </Link>
      ))}
    </div>
  </div>
);