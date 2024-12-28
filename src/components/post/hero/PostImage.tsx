import React from 'react';

interface PostImageProps {
  imageUrl: string;
  altText?: string;
}

export const PostImage: React.FC<PostImageProps> = ({ imageUrl, altText }) => (
  <div className="relative">
    {/* Decorative Shapes */}
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-tertiary/80 rounded-full -z-10" />
    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-quaternary/80 rounded-full -z-10" />
    <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/80 rounded-full -z-10" />
    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-tertiary/80 rounded-full -z-10" />

    {/* Image Container */}
    <div className="relative rounded-3xl overflow-hidden aspect-[21/9] shadow-lg">
      <img
        src={imageUrl}
        alt={altText || ""}
        className="w-full h-full object-cover object-center"
        loading="eager"
        style={{ imageRendering: 'crisp-edges' }}
      />
    </div>
  </div>
);