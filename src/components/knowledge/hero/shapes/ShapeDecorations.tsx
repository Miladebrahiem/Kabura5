import React from 'react';
import { Circle } from './Circle';
import { Square } from './Square';

export const ShapeDecorations: React.FC = () => (
  <>
    {/* Secondary color shapes */}
    <Circle 
      className="bg-secondary top-[30%] left-[15%]" 
      size={180}
    />
    <Square 
      className="bg-secondary top-[45%] left-[25%]"
      size={60}
      rotation={15}
    />

    {/* Tertiary color shapes */}
    <Circle 
      className="bg-tertiary bottom-[20%] left-[40%]"
      size={240}
    />
    <Square 
      className="bg-tertiary top-[35%] right-[20%]"
      size={80}
      rotation={30}
    />

    {/* Quaternary color shapes */}
    <Circle 
      className="bg-quaternary top-[25%] right-[30%]"
      size={160}
    />
    <Square 
      className="bg-quaternary bottom-[25%] right-[35%]"
      size={100}
      rotation={-20}
    />

    {/* Additional shapes */}
    <Circle 
      className="bg-tertiary bottom-[30%] left-[20%]"
      size={120}
    />
    <Square 
      className="bg-quaternary top-[40%] right-[40%]"
      size={70}
      rotation={45}
    />
  </>
);