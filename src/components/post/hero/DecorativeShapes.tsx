import React from 'react';

export const DecorativeShapes: React.FC = () => (
  <>
    {/* Background Shapes */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-quaternary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    
    {/* Decorative Lines */}
    <div className="absolute inset-0 opacity-10">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-px w-full bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            top: `${(i + 1) * 25}%`,
            transform: `rotate(${i * 5}deg)`,
          }}
        />
      ))}
    </div>
  </>
);