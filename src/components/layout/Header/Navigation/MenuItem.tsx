import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Plus } from 'lucide-react';
import { convertWordPressPath } from '../../../../utils/wordpress';
import { getMenuIcon } from '../../../../utils/menuIcons';
import type { MenuItem as MenuItemType } from '../../../../types/wordpress';

interface MenuItemProps {
  item: MenuItemType;
  onClose?: () => void;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ 
  item, 
  onClose,
  isExpanded,
  onToggle
}) => {
  const navigate = useNavigate();
  const hasChildren = item.childItems?.nodes?.length > 0;
  const menuIcon = getMenuIcon(item.path);
  const isHome = item.path.includes('home');

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (hasChildren) {
      onToggle?.();
    } else {
      if (isHome) {
        navigate('/home');
      } else {
        navigate(convertWordPressPath(item.url));
      }
      onClose?.();
    }
  };

  return (
    <li className="py-3 first:pt-0 last:pb-0">
      <div 
        className={`flex items-center justify-between cursor-pointer ${hasChildren ? 'hover:bg-white/5' : ''} rounded-lg transition-colors`}
        onClick={handleClick}
      >
        <Link
          to={isHome ? '/home' : convertWordPressPath(item.url)}
          className="text-white hover:text-gray-200 transition-colors py-2 px-3 text-lg flex items-center gap-3"
          onClick={handleClick}
        >
          {menuIcon && (
            <menuIcon.icon 
              className="w-5 h-5 text-tertiary" 
            />
          )}
          <span className="flex-1">{item.label}</span>
        </Link>
        <div className={`${hasChildren ? 'bg-tertiary' : 'bg-primary'} rounded-full p-1.5 mr-2`}>
          {hasChildren ? (
            <Plus className={`w-4 h-4 text-white transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`} />
          ) : (
            <ArrowRight className="w-4 h-4 text-white" />
          )}
        </div>
      </div>
      {hasChildren && isExpanded && (
        <ul className="pl-4 mt-2 space-y-2">
          {item.childItems.nodes.map((child) => (
            <li key={child.id}>
              <Link
                to={convertWordPressPath(child.url)}
                className="text-white/80 hover:text-white transition-colors py-1 px-3 text-base flex items-center justify-between group w-full"
                onClick={onClose}
              >
                <span>{child.label}</span>
                <div className="bg-primary rounded-full p-1.5">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};