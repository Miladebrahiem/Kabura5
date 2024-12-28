import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PostImage } from '../image/PostImage';
import { PostMeta } from './PostMeta';
import { PostExcerpt } from './PostExcerpt';

interface PostHeroProps {
  title: string;
  date: string;
  excerpt: string;
  categories: Array<{ name: string; slug: string; }>;
  featuredImage?: {
    sourceUrl: string;
    altText: string;
  };
  author?: string;
}

export const PostHero: React.FC<PostHeroProps> = ({
  title,
  date,
  excerpt,
  categories,
  featuredImage,
  author = 'Kabura Team'
}) => (
  <div className="bg-primary py-12">
    <div className="container mx-auto px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Back Button */}
        <Link 
          to="/kennis-en-nieuws"
          className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Terug naar overzicht</span>
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-8">
          {title}
        </h1>

        {/* Featured Image */}
        {featuredImage && (
          <div className="mb-6">
            <PostImage 
              imageUrl={featuredImage.sourceUrl} 
              altText={featuredImage.altText} 
            />
          </div>
        )}

        {/* Meta Info */}
        <div className="mb-8">
          <PostMeta 
            categories={categories}
            date={date}
            author={author}
          />
        </div>

        {/* Excerpt */}
        <div className="max-w-4xl">
          <PostExcerpt excerpt={excerpt} />
        </div>
      </div>
    </div>
  </div>
);