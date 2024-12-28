import React from 'react';
import { PostCard } from './PostCard';
import type { Post } from '../../../types/wordpress';

interface PostGridProps {
  posts: Post[];
}

export const PostGrid: React.FC<PostGridProps> = ({ posts }) => (
  <div className="space-y-6">
    {posts.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        excerpt={post.excerpt}
        date={post.date}
        slug={post.slug}
        imageUrl={post.featuredImage?.node?.sourceUrl}
        categories={post.categories.nodes}
      />
    ))}
  </div>
);