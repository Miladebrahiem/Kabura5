import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imageUrl?: string;
  categories: Array<{ name: string; slug: string; }>;
}

export const PostCard: React.FC<PostCardProps> = ({
  title,
  excerpt,
  date,
  slug,
  imageUrl,
  categories
}) => {
  const formattedDate = new Date(date).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="flex bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Image Section */}
      <div className="w-1/3 relative">
        <div className="absolute top-0 left-0 z-10">
          {categories[0] && (
            <div className="bg-quaternary text-white px-4 py-2 rounded-br-lg">
              <span className="font-medium">{categories[0].name}</span>
            </div>
          )}
        </div>
        <div className="relative h-full">
          <img
            src={imageUrl || 'https://source.unsplash.com/random/800x600?afghan+food'}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col">
        <Link 
          to={`/kennis-en-nieuws/${slug}`}
          className="block mb-3"
        >
          <h2 className="text-2xl font-extrabold text-gray-900">
            {title}
          </h2>
        </Link>

        <div 
          className="text-gray-600 mb-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />

        <div className="mt-auto flex items-center justify-between bg-secondary rounded-lg px-4 py-2">
          <span className="text-white text-sm">{formattedDate}</span>
          <Link
            to={`/kennis-en-nieuws/${slug}`}
            className="inline-flex items-center gap-2 text-white"
          >
            <span>Lees meer</span>
            <div className="bg-quaternary rounded-full p-1.5">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};