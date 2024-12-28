import React from 'react';
import { Link } from 'react-router-dom';
import { ContactMediumIcon } from './ContactMediumIcon';
import type { ContactMediumData } from './types';

export const ContactMediumLink: React.FC<ContactMediumData> = ({ 
  label, 
  href, 
  text, 
  icon, 
  isExternal 
}) => {
  const Component = isExternal ? 'a' : Link;
  const props = isExternal ? { href } : { to: href };

  return (
    <Component
      {...props}
      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
    >
      <ContactMediumIcon icon={icon} />
      <span className="text-secondary font-medium min-w-[80px]">{label}:</span>
      <span className="flex-grow">{text}</span>
      <div className="relative w-5 h-5 group-hover:rotate-12 transition-transform duration-300">
        <img
          src="https://miladjosofe44.sg-host.com//wp-content/uploads/2024/10/FavIcon-04.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </Component>
  );
};