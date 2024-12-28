import React from 'react';
import { Search } from 'lucide-react';

interface SearchSuggestionsProps {
  suggestions: string[];
  query: string;
  onSelect: (suggestion: string) => void;
  darkMode?: boolean;
}

export const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestions,
  query,
  onSelect,
  darkMode = false
}) => {
  const filteredSuggestions = suggestions
    .filter(suggestion => 
      suggestion.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 5);

  if (filteredSuggestions.length === 0) return null;

  return (
    <div className={`
      absolute top-full left-0 right-0 mt-2
      border rounded-lg shadow-lg
      ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
      overflow-hidden z-50
    `}>
      <ul>
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index}>
            <button
              type="button"
              onClick={() => onSelect(suggestion)}
              className={`
                w-full px-4 py-3
                flex items-center gap-3
                text-left
                ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}
                transition-colors duration-300
              `}
            >
              <Search className="w-4 h-4 text-gray-400" />
              <span className={darkMode ? 'text-white' : 'text-gray-800'}>
                {suggestion}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};