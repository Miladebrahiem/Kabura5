import React from 'react';
import { Link } from 'react-router-dom';
import type { ColorScheme } from './types';

interface CategoryBadgeProps {
  name: string;
  slug: string;
  colorScheme: ColorScheme;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  name,
  slug,
  colorScheme
}) => (
  <Link
    to={`/category/${slug}`}
    className="bg-secondary text-white text-sm px-3 py-1 rounded-full transition-all hover:bg-secondary/90"
  >
    {name}
  </Link>
);