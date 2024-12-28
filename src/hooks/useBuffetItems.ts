import { useState, useEffect } from 'react';
import { getDishes, createDish, updateDish, deleteDish } from '../lib/supabase/dishes';
import type { Dish } from '../types/dish';

export const useBuffetItems = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchDishes = async () => {
    try {
      setLoading(true);
      const data = await getDishes();
      setDishes(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch dishes'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const addDish = async (dish: Omit<Dish, 'id'>) => {
    try {
      await createDish(dish);
      await fetchDishes();
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to create dish');
    }
  };

  const editDish = async (id: string, dish: Partial<Dish>) => {
    try {
      await updateDish(id, dish);
      await fetchDishes();
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to update dish');
    }
  };

  const removeDish = async (id: string) => {
    try {
      await deleteDish(id);
      await fetchDishes();
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to delete dish');
    }
  };

  return {
    dishes,
    loading,
    error,
    addDish,
    editDish,
    removeDish,
    refresh: fetchDishes
  };
};