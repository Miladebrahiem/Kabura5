import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Zoeken..."
          className="w-64 px-4 py-2 rounded-l-lg bg-white text-gray-800 placeholder:text-gray-500 border-2 border-primary border-r-0 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors border-2 border-primary"
      >
        <Search className="w-5 h-5 text-white" />
      </button>
    </form>
  );
};