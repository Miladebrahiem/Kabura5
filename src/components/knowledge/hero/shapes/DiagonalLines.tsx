import React from 'react';

export const DiagonalLines: React.FC = () => (
  <div className="absolute inset-0">
    {/* Generate 45° lines with 45px spacing */}
    {Array.from({ length: 40 }).map((_, i) => (
      <div
        key={i}
        className="absolute h-[1px] w-[200%] bg-white/10 origin-left -rotate-45"
        style={{
          top: `${i * 45}px`,
          left: '0'
        }}
      />
    ))}
  </div>
);