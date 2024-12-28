import React from 'react';

interface ContactMediumIconProps {
  icon: React.ComponentType<{ className?: string }>;
}

export const ContactMediumIcon: React.FC<ContactMediumIconProps> = ({ icon: Icon }) => (
  <div className="bg-quaternary rounded-full p-2">
    <Icon className="w-4 h-4 text-white" />
  </div>
);