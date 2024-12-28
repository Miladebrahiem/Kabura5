import React from 'react';
import { Link } from 'react-router-dom';

interface PostCategoriesProps {
  categories: Array<{ name: string; slug: string; }>;
}

export const PostCategories: React.FC<PostCategoriesProps> = ({ categories }) => (
  <div className="flex flex-wrap gap-2">
    {categories.map((category) => (
      <Link
        key={category.slug}
        to={`/category/${category.slug}`}
        className="bg-quaternary hover:bg-quaternary/90 transition-colors text-white px-3 py-1 rounded-full text-sm"
      >
        {category.name}
      </Link>
    ))}
  </div>
);