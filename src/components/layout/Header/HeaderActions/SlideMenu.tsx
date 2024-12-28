import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { GET_MENU } from '../../../../lib/queries';
import { convertWordPressPath } from '../../../../utils/wordpress';

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SlideMenu: React.FC<SlideMenuProps> = ({ isOpen, onClose }) => {
  const { data, loading } = useQuery(GET_MENU);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Slide-out menu */}
      <div
        className={`fixed top-[4.2rem] right-0 w-full sm:right-4 sm:w-[300px] lg:w-1/4 bg-secondary h-[calc(100vh-4.2rem)] transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {loading ? (
            <div className="text-white">Loading...</div>
          ) : (
            <nav>
              <ul className="space-y-4">
                {data?.menu?.menuItems?.nodes.map((item: any) => (
                  <li key={item.id}>
                    <Link
                      to={convertWordPressPath(item.url)}
                      className="text-white hover:text-gray-200 transition-colors block py-2 text-lg"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </>
  );
};