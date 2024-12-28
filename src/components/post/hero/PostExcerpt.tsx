import React from 'react';

interface PostExcerptProps {
  excerpt: string;
}

export const PostExcerpt: React.FC<PostExcerptProps> = ({ excerpt }) => (
  <div 
    className="prose prose-lg prose-invert max-w-none text-white"
    dangerouslySetInnerHTML={{ __html: excerpt }}
  />
);