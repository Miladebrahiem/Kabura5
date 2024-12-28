import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PostMetaProps {
  categories: Array<{ name: string; slug: string; }>;
  date: string;
  author: string;
}

export const PostMeta: React.FC<PostMetaProps> = ({
  categories,
  date,
  author
}) => (
  <div className="flex flex-wrap items-center gap-6 text-white/90">
    {/* Categories */}
    <div className="flex flex-wrap gap-2">
      {categories.map(category => (
        <Link
          key={category.slug}
          to={`/category/${category.slug}`}
          className="bg-quaternary hover:bg-quaternary/90 transition-colors px-3 py-1 rounded-full text-white text-sm"
        >
          {category.name}
        </Link>
      ))}
    </div>

    {/* Date */}
    <div className="flex items-center gap-2">
      <Calendar className="w-4 h-4" />
      <span className="text-sm">
        {new Date(date).toLocaleDateString('nl-NL', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </span>
    </div>

    {/* Author */}
    <div className="flex items-center gap-2">
      <User className="w-4 h-4" />
      <span className="text-sm">{author}</span>
    </div>
  </div>
);