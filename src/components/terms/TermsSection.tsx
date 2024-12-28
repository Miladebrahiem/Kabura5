import React from 'react';

interface TermsSectionProps {
  children: React.ReactNode;
}

export const TermsSection: React.FC<TermsSectionProps> = ({ children }) => (
  <div 
    className="mb-8 last:mb-0"
    dangerouslySetInnerHTML={{ __html: children?.toString() || '' }}
  />
);