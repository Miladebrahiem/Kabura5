import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MAIN_MENU } from '../../../lib/queries';
import { MenuList } from './Navigation/MenuList';
import { ContactButtons } from './MobileMenu/ContactButtons';
import { MobileMenuHeader } from './MobileMenu/MobileMenuHeader';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { data, loading } = useQuery(GET_MAIN_MENU);

  return (
    <div
      className={`fixed inset-0 bg-secondary z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:hidden`}
    >
      <div className="h-full flex flex-col">
        <MobileMenuHeader onClose={onClose} />
        <div className="flex-1 overflow-y-auto pt-[3%] px-4 pb-4">
          {loading ? (
            <div className="text-white">Loading...</div>
          ) : (
            <nav className="space-y-6">
              <MenuList 
                items={data?.menu?.menuItems?.nodes || []} 
                onClose={onClose}
              />
              <ContactButtons />
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};