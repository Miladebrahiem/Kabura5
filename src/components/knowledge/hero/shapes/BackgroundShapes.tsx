import React from 'react';

export const BackgroundShapes: React.FC = () => (
  <>
    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/20 rounded-full translate-y-1/2 -translate-x-1/2" />
    <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-quaternary/20 rounded-full -translate-y-1/2" />
  </>
);