import React from 'react';

export const DecorativeShapes: React.FC = () => (
  <>
    {/* Secondary Color Shape */}
    <div className="absolute top-12 right-[20%] w-32 h-32 bg-secondary/30 rounded-full blur-lg" />
    
    {/* Tertiary Color Shape */}
    <div className="absolute bottom-24 right-[30%] w-48 h-48 bg-tertiary/20 rounded-full blur-lg" />
    
    {/* Quaternary Color Shape */}
    <div className="absolute top-1/3 right-[15%] w-40 h-40 bg-quaternary/25 rounded-full blur-lg" />
  </>
);