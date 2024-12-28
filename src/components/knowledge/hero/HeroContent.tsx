import React from 'react';

interface HeroContentProps {
  title: string;
  content?: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({ title, content }) => (
  <div className="relative z-20 max-w-2xl">
    {content && (
      <div 
        className="text-lg text-white/90 prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )}
  </div>
);