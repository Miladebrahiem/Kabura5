/**
 * WordPress utility functions
 */

import type { Dish } from '../types/dish';

// Convert WordPress menu items to dish format
export const convertMenuItemsToDishes = (menuItems: any[]): Dish[] => {
  return menuItems.map(item => ({
    id: item.id,
    name: item.title,
    description: item.description || '',
    price: item.menuDishMeta?.price || 0,
    type: item.menuDishMeta?.type || 'meat',
    category: item.categories?.nodes[0]?.name || 'Overig',
    image: item.featuredImage?.node?.sourceUrl
  }));
};

// Convert WordPress URL path to React Router path
export const convertWordPressPath = (path: string): string => {
  // Remove domain if present
  const cleanPath = path.replace(/^(?:https?:\/\/)?[^\/]+/, '');
  
  // Remove trailing slash
  return cleanPath.replace(/\/$/, '');
};