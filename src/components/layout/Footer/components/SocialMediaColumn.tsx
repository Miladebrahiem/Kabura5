import React from 'react';
import { Facebook, Youtube, Linkedin, Instagram } from 'lucide-react';
import { BrandTiktok } from './BrandTiktok';

export const SocialMediaColumn: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: BrandTiktok, href: '#', label: 'TikTok' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <div className="bg-tertiary h-full py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-[350px] mx-auto">
          <h3 className="text-white font-bold text-xl mb-6">Volg ons</h3>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-quaternary rounded-full p-3 hover:bg-opacity-90 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};