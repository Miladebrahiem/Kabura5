import React, { useState } from 'react';
import { PostGrid } from '../posts/PostGrid';
import { Sidebar } from './Sidebar';
import { Pagination } from '../pagination/Pagination';
import { CategoryFilter } from '../filters/CategoryFilter';
import { usePagination } from '../../../hooks/usePagination';
import { useCategories } from '../../../hooks/useCategories';
import type { Post } from '../../../types/wordpress';

interface KnowledgeLayoutProps {
  posts: Post[];
}

export const KnowledgeLayout: React.FC<KnowledgeLayoutProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const categories = useCategories(posts);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory
      ? post.categories.nodes.some(cat => cat.slug === selectedCategory)
      : true;
    
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  const { currentItems, currentPage, totalPages, handlePageChange } = usePagination({
    items: filteredPosts,
    itemsPerPage: 6,
  });

  return (
    <div className="container mx-auto px-4">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onSearch={setSearchQuery}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PostGrid posts={currentItems} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};