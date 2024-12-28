import React from 'react';
import { Calendar, User } from 'lucide-react';

interface PostMetaInfoProps {
  categories: Array<{ name: string; slug: string; }>;
  date: string;
  author: string;
}

export const PostMetaInfo: React.FC<PostMetaInfoProps> = ({
  categories,
  date,
  author
}) => (
  <div className="col-span-1">
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium text-white/60 mb-2">Categorie</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <div 
              key={category.slug}
              className="bg-white/10 text-white px-3 py-1.5 rounded-lg text-sm inline-block"
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>

      {/* Date */}
      <div>
        <h3 className="text-sm font-medium text-white/60 mb-2">Publicatiedatum</h3>
        <div className="flex items-center gap-2 text-white/80">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">
            {new Date(date).toLocaleDateString('nl-NL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
      </div>

      {/* Author */}
      <div>
        <h3 className="text-sm font-medium text-white/60 mb-2">Auteur</h3>
        <div className="flex items-center gap-2 text-white/80">
          <User className="w-4 h-4" />
          <span className="text-sm">{author}</span>
        </div>
      </div>
    </div>
  </div>
);