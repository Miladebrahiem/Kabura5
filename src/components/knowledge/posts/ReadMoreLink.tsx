import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ReadMoreLinkProps {
  slug: string;
}

export const ReadMoreLink: React.FC<ReadMoreLinkProps> = ({ slug }) => (
  <Link
    to={`/kennis-en-nieuws/${slug}`}
    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
  >
    <span>Lees meer</span>
    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
  </Link>
);