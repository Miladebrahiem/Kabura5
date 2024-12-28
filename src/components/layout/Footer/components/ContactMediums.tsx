import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, MessageSquare } from 'lucide-react';

export const ContactMediums: React.FC = () => {
  const mediums = [
    { 
      label: 'E-mail',
      href: 'mailto:info@kabura.nl',
      text: 'info@kabura.nl',
      icon: Mail,
      isExternal: true
    },
    { 
      label: 'Telefoon',
      href: 'tel:01852129942',
      text: '018 521 299 42',
      icon: Phone,
      isExternal: true
    },
    { 
      label: 'WhatsApp',
      href: 'https://wa.me/31852129942',
      text: '+31 85 212 9942',
      icon: MessageCircle,
      isExternal: true
    },
    {
      label: 'Contactpagina',
      href: '/contacteren',
      text: 'Contactpagina',
      icon: MessageSquare,
      isExternal: false
    }
  ];

  return (
    <div className="space-y-4">
      {mediums.map((medium) => {
        const Component = medium.isExternal ? 'a' : Link;
        const props = medium.isExternal ? { href: medium.href } : { to: medium.href };

        return (
          <Component
            key={medium.label}
            {...props}
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
          >
            <div className="bg-quaternary rounded-full p-2">
              <medium.icon className="w-4 h-4 text-white" />
            </div>
            <span className="text-secondary font-medium min-w-[80px]">{medium.label}:</span>
            <span>{medium.text}</span>
          </Component>
        );
      })}
    </div>
  );
};