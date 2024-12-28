import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MAIN_MENU } from '../../../../lib/queries';
import { MenuList } from '../Navigation/MenuList';
import { ContactButtons } from '../MobileMenu/ContactButtons';

interface PopupMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PopupMenu: React.FC<PopupMenuProps> = ({ isOpen, onClose }) => {
  const { data, loading } = useQuery(GET_MAIN_MENU);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      <div className="container mx-auto px-4">
        <div 
          className="absolute right-4 w-[300px] lg:w-1/4 bg-secondary rounded-b-lg shadow-xl transform transition-all duration-200 ease-out z-50"
          style={{
            top: 'var(--header-height)',
            maxHeight: 'calc(90vh - var(--header-height))',
            overflowY: 'auto'
          }}
        >
          <div className="p-6">
            <nav className="space-y-6">
              <MenuList 
                items={data?.menu?.menuItems?.nodes || []} 
                onClose={onClose}
              />
              <ContactButtons />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};