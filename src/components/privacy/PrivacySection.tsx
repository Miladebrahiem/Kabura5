import React from 'react';

interface PrivacySectionProps {
  children: React.ReactNode;
}

export const PrivacySection: React.FC<PrivacySectionProps> = ({ children }) => (
  <div 
    className="mb-8 last:mb-0"
    dangerouslySetInnerHTML={{ __html: children?.toString() || '' }}
  />
);