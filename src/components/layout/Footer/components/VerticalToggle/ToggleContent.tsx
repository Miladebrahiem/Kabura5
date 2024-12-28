import React from 'react';
import { Link } from 'react-router-dom';

interface ToggleContentProps {
  isOpen: boolean;
  items: Array<{ label: string; href: string; }>;
  bgColor: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

export const ToggleContent: React.FC<ToggleContentProps> = ({ 
  isOpen, 
  items, 
  bgColor 
}) => {
  const bgColorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
    quaternary: 'bg-quaternary'
  };

  if (!isOpen) return null;

  return (
    <div className={`${bgColorClasses[bgColor]} px-6 py-4`}>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={`${item.href}-${index}`}>
            <Link 
              to={item.href}
              className="flex items-center justify-between text-white/80 hover:text-white transition-colors group"
            >
              <span>{item.label}</span>
              <div className="relative w-5 h-5 group-hover:rotate-12 transition-transform duration-300">
                <img
                  src="https://miladjosofe44.sg-host.com//wp-content/uploads/2024/10/FavIcon-04.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};