import React from 'react';
import { Book } from 'lucide-react';

export const HeroBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
    <Book className="w-4 h-4" />
    <span className="text-sm font-medium">Kennis & Nieuws</span>
  </div>
);