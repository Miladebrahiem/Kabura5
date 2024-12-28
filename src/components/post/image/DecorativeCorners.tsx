import React from 'react';

interface DecorativeCornersProps {
  className?: string;
}

export const DecorativeCorners: React.FC<DecorativeCornersProps> = ({ className = '' }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    {/* Top Left - Primary */}
    <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/80 rounded-full -z-10" />
    
    {/* Top Right - Secondary */}
    <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/80 rounded-full -z-10" />
    
    {/* Bottom Left - Tertiary */}
    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-tertiary/80 rounded-full -z-10" />
    
    {/* Bottom Right - Quaternary */}
    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-quaternary/80 rounded-full -z-10" />
  </div>
);