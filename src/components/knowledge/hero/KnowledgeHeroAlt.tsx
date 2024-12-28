import React from 'react';
import { Book, ArrowRight } from 'lucide-react';
import { Stats } from './stats/Stats';

interface KnowledgeHeroAltProps {
  title: string;
  imageUrl?: string;
}

export const KnowledgeHeroAlt: React.FC<KnowledgeHeroAltProps> = ({ title, imageUrl }) => (
  <div className="bg-primary">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
        {/* Left Content */}
        <div className="py-16 md:py-24">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-8">
            <Book className="w-4 h-4" />
            <span className="text-sm font-medium">Kennis & Nieuws</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          
          <p className="text-lg text-white/80 mb-8 max-w-xl">
            Ontdek de laatste ontwikkelingen, tips en inzichten over Afghaanse catering en cultuur.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="bg-quaternary px-6 py-3 rounded-lg">
              <span className="text-white font-medium">Culinaire Tips</span>
            </div>
            <div className="bg-tertiary px-6 py-3 rounded-lg">
              <span className="text-white font-medium">Culturele Inzichten</span>
            </div>
          </div>

          <Stats />
        </div>

        {/* Right Image */}
        {imageUrl && (
          <div className="relative h-full min-h-[400px] lg:min-h-full">
            <div className="absolute inset-0 bg-secondary/10 backdrop-blur-sm rounded-3xl overflow-hidden p-4">
              <img
                src={imageUrl}
                alt="Header"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-quaternary/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-tertiary/20 rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);