import React from 'react';

interface HeroImageProps {
  imageUrl?: string;
  altText?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, altText }) => {
  if (!imageUrl) return null;

  return (
    <div className="absolute -right-48 -bottom-24">
      {/* Decorative border circle */}
      <div className="absolute inset-0 w-[820px] h-[820px] rounded-full bg-tertiary -z-10" />
      
      {/* Image container */}
      <div className="relative w-[800px] h-[800px] rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/90" />
        <img
          src={imageUrl}
          alt={altText || ""}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};