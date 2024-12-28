import { useState, useEffect } from 'react';
import type { Dish } from '../types/dish';

export const useDishes = (content: string) => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!content) {
      setLoading(false);
      return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    
    const parsedDishes: Dish[] = [];
    let currentCategory = '';
    let currentType: 'vegan' | 'vegetarian' | 'meat' = 'meat';

    // Process each element in the content
    doc.body.childNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        
        // Check for category headers
        if (element.tagName.match(/^H[1-6]$/)) {
          const text = element.textContent?.toLowerCase() || '';
          currentCategory = element.textContent || '';
          
          // Determine type based on category header
          if (text.includes('vegan') || text.includes('plantaardig')) {
            currentType = 'vegan';
          } else if (text.includes('vegetarisch')) {
            currentType = 'vegetarian';
          } else if (text.includes('vlees') || text.includes('kip') || text.includes('lam')) {
            currentType = 'meat';
          }
        }
        
        // Look for numbered items (typically in paragraphs or list items)
        const numberMatch = element.textContent?.match(/^(\d+)\.\s*(.*?)(?:\s*€\s*(\d+(?:[.,]\d{2})?))?\s*$/);
        if (numberMatch) {
          const [, number, name, priceStr] = numberMatch;
          
          // Get description from next sibling if it exists
          const description = element.nextElementSibling?.textContent?.trim() || '';
          
          // Convert price string to number, handling both comma and dot decimals
          const price = priceStr ? parseFloat(priceStr.replace(',', '.')) : 0;
          
          if (name) {
            parsedDishes.push({
              id: `dish-${number}`,
              name: `${number}. ${name.trim()}`,
              description,
              price,
              type: currentType,
              category: currentCategory
            });
          }
        }
      }
    });

    setDishes(parsedDishes);
    setLoading(false);
  }, [content]);

  return { dishes, loading };
};