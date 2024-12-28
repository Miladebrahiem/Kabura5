import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HorizontalToggleProps {
  title: string;
  items: Array<{ label: string; href: string; }>;
  bgColor: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

export const HorizontalToggle: React.FC<HorizontalToggleProps> = ({
  title,
  items,
  bgColor
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const bgColorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
    quaternary: 'bg-quaternary'
  };

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${bgColorClasses[bgColor]} h-full flex items-center gap-2 px-6 py-12`}
      >
        <h3 className="text-white font-bold text-xl">{title}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className={`${bgColorClasses[bgColor]} absolute left-0 right-0 p-6 z-10`}>
          <ul className="space-y-4">
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
      )}
    </div>
  );
};