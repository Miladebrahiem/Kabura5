import React from 'react';

interface PostExcerptSectionProps {
  excerpt: string;
}

export const PostExcerptSection: React.FC<PostExcerptSectionProps> = ({ excerpt }) => (
  <div className="col-span-4 w-full">
    <div 
      className="prose prose-lg prose-invert max-w-none w-full"
      dangerouslySetInnerHTML={{ __html: excerpt }}
    />
  </div>
);