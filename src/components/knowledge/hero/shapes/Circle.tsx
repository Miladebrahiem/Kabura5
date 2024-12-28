import React from 'react';

interface CircleProps {
  className?: string;
  size?: number;
}

export const Circle: React.FC<CircleProps> = ({ className = '', size = 120 }) => (
  <div 
    className={`rounded-full absolute ${className}`}
    style={{ 
      width: size,
      height: size
    }}
  />
);