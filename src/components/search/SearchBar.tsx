import React, { useState, useRef } from 'react';
import { Search, X, Mic } from 'lucide-react';
import { SearchSuggestions } from './SearchSuggestions';
import { useVoiceSearch } from './hooks/useVoiceSearch';
import { useClickOutside } from './hooks/useClickOutside';

interface SearchBarProps {
  onSearch: (query: string) => void;
  suggestions?: string[];
  placeholder?: string;
  darkMode?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  suggestions = [],
  placeholder = 'Zoeken...',
  darkMode = false
}) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { isListening, startListening, stopListening } = useVoiceSearch((text) => {
    setQuery(text);
    onSearch(text);
  });

  useClickOutside(searchRef, () => setShowSuggestions(false));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    setShowSuggestions(false);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
    setShowSuggestions(false);
  };

  const baseClasses = `
    w-full max-w-[600px] mx-auto
    transition-all duration-300
    ${darkMode ? 'text-white' : 'text-gray-800'}
  `;

  const inputClasses = `
    w-full h-[50px] pl-12 pr-[100px]
    text-base md:text-lg
    rounded-lg
    ${darkMode ? 'bg-gray-800' : 'bg-[#F5F5F5]'}
    border-2 border-transparent
    focus:outline-none focus:border-primary
    transition-all duration-300
    placeholder:${darkMode ? 'text-gray-400' : 'text-gray-500'}
  `;

  return (
    <div className={baseClasses} ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative shadow-lg rounded-lg">
        {/* Search Icon */}
        <Search className={`
          absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5
          ${darkMode ? 'text-gray-400' : 'text-gray-500'}
        `} />

        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          placeholder={placeholder}
          className={inputClasses}
          aria-label="Search"
        />

        {/* Action Buttons */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {/* Voice Search */}
          <button
            type="button"
            onClick={isListening ? stopListening : startListening}
            className={`
              p-2 rounded-full
              ${isListening ? 'bg-primary text-white' : 'hover:bg-gray-200'}
              transition-colors duration-300
            `}
            aria-label={isListening ? 'Stop voice search' : 'Start voice search'}
          >
            <Mic className="w-5 h-5" />
          </button>

          {/* Clear Button */}
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className={`
                p-2 rounded-full
                hover:bg-gray-200
                transition-colors duration-300
              `}
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <SearchSuggestions
            suggestions={suggestions}
            query={query}
            onSelect={(suggestion) => {
              setQuery(suggestion);
              onSearch(suggestion);
              setShowSuggestions(false);
            }}
            darkMode={darkMode}
          />
        )}
      </form>
    </div>
  );
};