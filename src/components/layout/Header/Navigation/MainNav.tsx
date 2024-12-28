import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_AANBOD_MENU } from '../../../../lib/queries';
import { convertWordPressPath } from '../../../../utils/wordpress';
import type { MenuItem } from '../../../../types/wordpress';

export const MainNav: React.FC = () => {
  const { loading, error, data } = useQuery(GET_AANBOD_MENU);

  if (loading) return <nav className="hidden lg:flex gap-6">Loading...</nav>;
  if (error) return <nav className="hidden lg:flex gap-6">Error loading menu</nav>;

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center">
        {data?.menu?.menuItems?.nodes.map((item: MenuItem, index: number) => (
          <li key={item.id} className="flex items-center">
            <Link 
              to={convertWordPressPath(item.url)}
              className="text-white hover:text-tertiary transition-colors text-base font-normal px-4"
            >
              {item.label}
            </Link>
            {index < data.menu.menuItems.nodes.length - 1 && (
              <div className="h-4 w-px bg-quaternary" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};