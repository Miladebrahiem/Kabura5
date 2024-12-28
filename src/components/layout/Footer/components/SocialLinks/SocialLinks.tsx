import React from 'react';
import { Facebook, Youtube, Linkedin, Instagram } from 'lucide-react';
import { BrandTiktok } from '../BrandTiktok';
import { BrandGoogle } from './BrandGoogle';
import { SocialLink } from './SocialLink';

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/kaburacatering',
      label: 'Facebook'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/kabura-catering/',
      label: 'LinkedIn'
    },
    { 
      icon: Instagram, 
      href: '#',
      label: 'Instagram'
    },
    { 
      icon: BrandTiktok, 
      href: 'https://www.tiktok.com/@kaburacatering',
      label: 'TikTok'
    },
    { 
      icon: Youtube, 
      href: 'https://www.youtube.com/channel/UCmsv-n--tHDev9ylkI2cOEg',
      label: 'YouTube'
    },
    { 
      icon: BrandGoogle, 
      href: 'https://maps.app.goo.gl/FscVFENPVxr5EtJJ8',
      label: 'Google Maps'
    }
  ];

  return (
    <div className="flex items-center gap-3 mt-4 md:mt-0">
      {socialLinks.map((link) => (
        <SocialLink
          key={link.label}
          href={link.href}
          icon={link.icon}
          label={link.label}
        />
      ))}
    </div>
  );
};