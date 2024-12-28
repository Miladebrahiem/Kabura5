import React from 'react';
import { Calendar } from 'lucide-react';

interface PostDateProps {
  date: string;
}

export const PostDate: React.FC<PostDateProps> = ({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex items-center text-secondary text-sm">
      <Calendar className="w-4 h-4 mr-2" />
      {formattedDate}
    </div>
  );
};