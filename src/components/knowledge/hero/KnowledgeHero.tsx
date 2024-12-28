import React from 'react';
import { HeroBadge } from './HeroBadge';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';

interface KnowledgeHeroProps {
  title: string;
  content?: string;
  featuredImage?: {
    sourceUrl: string;
    altText: string;
  };
}

export const KnowledgeHero: React.FC<KnowledgeHeroProps> = ({ 
  title, 
  content,
  featuredImage 
}) => (
  <div className="relative bg-primary overflow-hidden">
    {/* Background Image */}
    <HeroImage 
      imageUrl={featuredImage?.sourceUrl}
      altText={featuredImage?.altText}
    />
    
    {/* Content */}
    <div className="container mx-auto px-4 relative">
      <div className="py-16 md:py-24">
        <div className="relative z-20 max-w-2xl">
          <div className="mb-8">
            <HeroBadge />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          
          <HeroContent title={title} content={content} />
        </div>
      </div>
    </div>
  </div>
);