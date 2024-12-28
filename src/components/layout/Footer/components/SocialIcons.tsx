import React from 'react';
import { Facebook, Youtube, Linkedin, Instagram } from 'lucide-react';
import { BrandTiktok } from './BrandTiktok';

export const SocialIcons: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: BrandTiktok, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' }
  ];

  return (
    <div className="flex items-center gap-4 mt-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="bg-quaternary rounded-full p-3 hover:bg-opacity-90 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon className="w-5 h-5 text-secondary" />
        </a>
      ))}
    </div>
  );
};