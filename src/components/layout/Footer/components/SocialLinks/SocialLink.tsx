import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => {
  return (
    <a
      href={href}
      className="bg-primary hover:bg-tertiary rounded-full p-2 transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Icon className="w-4 h-4 text-white" />
    </a>
  );
};