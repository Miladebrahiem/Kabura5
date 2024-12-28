import React from 'react';
import { Tag } from 'lucide-react';
import { SearchInput } from './SearchInput';

interface Category {
  name: string;
  slug: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryChange: (slug: string | null) => void;
  onSearch: (query: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onSearch
}) => {
  const totalPosts = categories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex items-center justify-center bg-primary/10 w-10 h-10 rounded-lg mt-0.5">
          <Tag className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Filter op categorie</h3>
          <p className="text-sm text-gray-500 mt-1">Selecteer een categorie om artikelen te filteren</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex-1 flex flex-wrap gap-3">
          <button
            onClick={() => onCategoryChange(null)}
            className={`inline-flex items-center h-10 px-4 rounded-lg transition-colors ${
              selectedCategory === null
                ? 'bg-primary text-white'
                : 'bg-secondary/10 text-secondary hover:bg-secondary/20'
            }`}
          >
            <span>Alle artikelen</span>
            <span className="ml-2 text-sm opacity-75">({totalPosts})</span>
          </button>

          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => onCategoryChange(category.slug)}
              className={`inline-flex items-center h-10 px-4 rounded-lg transition-colors ${
                selectedCategory === category.slug
                  ? 'bg-primary text-white'
                  : category.count === 0
                  ? 'bg-secondary/5 text-secondary/40 cursor-not-allowed'
                  : 'bg-secondary/10 text-secondary hover:bg-secondary/20'
              }`}
              disabled={category.count === 0}
            >
              <span>{category.name}</span>
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        <SearchInput onSearch={onSearch} />
      </div>
    </div>
  );
};