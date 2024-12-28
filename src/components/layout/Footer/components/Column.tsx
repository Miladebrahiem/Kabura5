import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FooterItem {
  label: string;
  href: string;
}

interface ColumnProps {
  title: string;
  bgColor: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  items: FooterItem[];
}

export const Column: React.FC<ColumnProps> = ({ title, bgColor, items }) => {
  const bgColorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
    quaternary: 'bg-quaternary'
  };

  // Contrasting circle colors based on background
  const circleColorClasses = {
    primary: 'bg-quaternary',
    secondary: 'bg-tertiary',
    tertiary: 'bg-secondary',
    quaternary: 'bg-primary'
  };

  return (
    <div className={`${bgColorClasses[bgColor]} h-full py-12`}>
      <div className="container mx-auto px-4">
        <div className="max-w-[350px] mx-auto">
          <h3 className="text-white font-bold text-xl mb-6">{title}</h3>
          {items.length > 0 ? (
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={`${item.href}-${index}`}>
                  <Link 
                    to={item.href}
                    className="flex items-center justify-between text-white/80 hover:text-white transition-colors group"
                  >
                    <span>{item.label}</span>
                    <div className={`${circleColorClasses[bgColor]} rounded-full p-1.5 group-hover:scale-110 transition-transform`}>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-white/60">
              Binnenkort beschikbaar
            </div>
          )}
        </div>
      </div>
    </div>
  );
};