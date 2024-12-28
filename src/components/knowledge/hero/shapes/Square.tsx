import React from 'react';

interface SquareProps {
  className?: string;
  size?: number;
  rotation?: number;
}

export const Square: React.FC<SquareProps> = ({ 
  className = '', 
  size = 80,
  rotation = 0 
}) => (
  <div 
    className={`absolute ${className}`}
    style={{ 
      width: size,
      height: size,
      transform: `rotate(${rotation}deg)`
    }}
  />
);