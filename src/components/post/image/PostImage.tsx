import React from 'react';
import { DecorativeCorners } from './DecorativeCorners';

interface PostImageProps {
  imageUrl: string;
  altText?: string;
}

export const PostImage: React.FC<PostImageProps> = ({ imageUrl, altText }) => (
  <div className="relative">
    <DecorativeCorners />
    
    {/* Image Container */}
    <div className="relative rounded-3xl overflow-hidden aspect-[21/9] shadow-lg">
      <img
        src={imageUrl}
        alt={altText || ""}
        className="w-full h-full object-cover object-center"
        loading="eager"
      />
    </div>
  </div>
);