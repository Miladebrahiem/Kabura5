import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORIES } from '../lib/queries';
import type { Post } from '../types/wordpress';

export const useCategories = (posts: Post[]) => {
  const { data: categoriesData } = useQuery(GET_ALL_CATEGORIES);

  return useMemo(() => {
    // Get all categories from WordPress
    const allCategories = categoriesData?.categories?.nodes || [];
    
    // Create a map of post counts
    const postCountMap = posts.reduce((acc, post) => {
      post.categories.nodes.forEach((category) => {
        acc[category.slug] = (acc[category.slug] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);

    // Combine WordPress categories with post counts
    const categories = allCategories.map(category => ({
      name: category.name,
      slug: category.slug,
      count: postCountMap[category.slug] || 0
    }));

    // Sort by count (descending) and then alphabetically
    return categories.sort((a, b) => {
      if (b.count === a.count) {
        return a.name.localeCompare(b.name);
      }
      return b.count - a.count;
    });
  }, [categoriesData, posts]);
};