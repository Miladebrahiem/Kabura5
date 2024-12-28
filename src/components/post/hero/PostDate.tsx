import React from 'react';

interface PostDateProps {
  date: string;
}

export const PostDate: React.FC<PostDateProps> = ({ date }) => (
  <div className="bg-tertiary/90 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm">
    {new Date(date).toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}
  </div>
);