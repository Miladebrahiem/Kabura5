import React, { useState, useRef } from 'react';
import { UseFormRegister, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { ChevronDown } from 'lucide-react';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import type { Dish } from '../../../../types/dish';

interface CategorySelectProps {
  register: UseFormRegister<Omit<Dish, 'id'>>;
  watch: UseFormWatch<Omit<Dish, 'id'>>;
  setValue: UseFormSetValue<Omit<Dish, 'id'>>;
  error?: string;
}

const CATEGORIES = [
  { 
    value: 'Voorgerechten',
    subCategories: ['Koude Selectie', 'Warme Selecties']
  },
  {
    value: 'Hoofdgerechten',
    subCategories: ['Rijstgerechten', 'Vlees gerechten']
  },
  {
    value: 'Kebab gerechten',
    subCategories: []
  },
  {
    value: 'Bijgerechten',
    subCategories: []
  },
  {
    value: 'Nagerechten/Desserts',
    subCategories: []
  }
] as const;

export const CategorySelect: React.FC<CategorySelectProps> = ({
  register,
  watch,
  setValue,
  error
}) => {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  
  const mainRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  
  const selectedCategory = watch('category');
  const selectedSubCategory = watch('subCategory');
  
  const currentCategory = CATEGORIES.find(c => c.value === selectedCategory);
  const hasSubCategories = currentCategory?.subCategories.length ?? 0 > 0;

  useClickOutside(mainRef, () => setIsMainOpen(false));
  useClickOutside(subRef, () => setIsSubOpen(false));

  const handleCategorySelect = (category: string) => {
    setValue('category', category);
    setValue('subCategory', ''); // Clear subcategory when main category changes
    setIsMainOpen(false);
    
    // If the new category has subcategories, open the subcategory dropdown
    const newCategory = CATEGORIES.find(c => c.value === category);
    if (newCategory?.subCategories.length) {
      setIsSubOpen(true);
    }
  };

  const handleSubCategorySelect = (subCategory: string) => {
    setValue('subCategory', subCategory);
    setIsSubOpen(false);
  };

  const buttonClasses = `
    w-full px-4 py-2 text-left bg-white border-2 rounded-lg
    focus:outline-none focus:ring-2 focus:ring-primary/20
    flex items-center justify-between
    transition-all duration-200
  `;

  return (
    <div className="space-y-4">
      {/* Main Category */}
      <div ref={mainRef} className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Categorie
        </label>
        <button
          type="button"
          onClick={() => {
            setIsMainOpen(!isMainOpen);
            setIsSubOpen(false); // Close subcategory dropdown when opening main
          }}
          className={`${buttonClasses} ${
            isMainOpen 
              ? 'border-primary shadow-sm' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <span>{selectedCategory || 'Selecteer categorie'}</span>
          <ChevronDown className={`
            w-5 h-5 text-gray-400
            transition-transform duration-200
            ${isMainOpen ? 'rotate-180' : ''}
          `} />
        </button>

        {isMainOpen && (
          <div className="absolute z-50 w-full mt-1">
            <ul className="bg-white border border-gray-200 rounded-lg shadow-lg py-1 max-h-60 overflow-auto">
              {CATEGORIES.map(category => (
                <li
                  key={category.value}
                  className={`
                    px-4 py-2 cursor-pointer
                    ${selectedCategory === category.value 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                  onClick={() => handleCategorySelect(category.value)}
                >
                  {category.value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>

      {/* Sub Category */}
      {hasSubCategories && (
        <div ref={subRef} className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subcategorie
          </label>
          <button
            type="button"
            onClick={() => {
              setIsSubOpen(!isSubOpen);
              setIsMainOpen(false); // Close main dropdown when opening subcategory
            }}
            className={`${buttonClasses} ${
              isSubOpen 
                ? 'border-primary shadow-sm' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <span>{selectedSubCategory || 'Selecteer subcategorie'}</span>
            <ChevronDown className={`
              w-5 h-5 text-gray-400
              transition-transform duration-200
              ${isSubOpen ? 'rotate-180' : ''}
            `} />
          </button>

          {isSubOpen && (
            <div className="absolute z-50 w-full mt-1">
              <ul className="bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                {currentCategory?.subCategories.map(sub => (
                  <li
                    key={sub}
                    className={`
                      px-4 py-2 cursor-pointer
                      ${selectedSubCategory === sub 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-gray-700 hover:bg-gray-50'
                      }
                    `}
                    onClick={() => handleSubCategorySelect(sub)}
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Hidden form fields */}
      <input type="hidden" {...register('category', { required: 'Categorie is verplicht' })} />
      <input type="hidden" {...register('subCategory')} />
    </div>
  );
};