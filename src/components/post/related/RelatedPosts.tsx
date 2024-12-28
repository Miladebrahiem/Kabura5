import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  slug: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

interface RelatedPostsProps {
  posts: Post[];
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => (
  <div className="bg-gray-50 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-secondary mb-8">Gerelateerde artikelen</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link 
            key={post.id}
            to={`/kennis-en-nieuws/${post.slug}`}
            className="bg-white rounded-xl shadow-sm overflow-hidden group"
          >
            {post.featuredImage?.node?.sourceUrl && (
              <div className="aspect-video">
                <img
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-secondary mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center text-primary">
                <span>Lees meer</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);