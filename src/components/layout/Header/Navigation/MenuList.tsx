import React, { useState } from 'react';
import { MenuItem } from './MenuItem';
import type { MenuItem as MenuItemType } from '../../../../types/wordpress';

interface MenuListProps {
  items: MenuItemType[];
  onClose?: () => void;
}

export const MenuList: React.FC<MenuListProps> = ({ items, onClose }) => {
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const handleToggle = (itemId: string) => {
    setExpandedItemId(expandedItemId === itemId ? null : itemId);
  };

  return (
    <ul className="divide-y divide-quaternary">
      {items.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          onClose={onClose}
          isExpanded={expandedItemId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </ul>
  );
};