import React, { useState } from 'react';
import { ToggleButton } from './ToggleButton';
import { ToggleContent } from './ToggleContent';

interface VerticalToggleProps {
  title: string;
  items: Array<{ label: string; href: string; }>;
  bgColor: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

export const VerticalToggle: React.FC<VerticalToggleProps> = ({
  title,
  items,
  bgColor
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <ToggleButton
        title={title}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        bgColor={bgColor}
      />
      <ToggleContent
        isOpen={isOpen}
        items={items}
        bgColor={bgColor}
      />
    </div>
  );
};