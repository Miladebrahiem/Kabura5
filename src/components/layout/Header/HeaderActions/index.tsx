import React, { useState } from 'react';
import { ContactButton } from './ContactButton';
import { DiscoverButton } from './DiscoverButton';
import { PopupMenu } from './PopupMenu';

export const HeaderActions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <ContactButton />
      <DiscoverButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <PopupMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};