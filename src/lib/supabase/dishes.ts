import { supabase } from './client';
import type { Dish } from '../../types/dish';

export const getDishes = async () => {
  const { data, error } = await supabase
    .from('dishes')
    .select(`
      id,
      name,
      description,
      price,
      type,
      category,
      history,
      image_url,
      min_people,
      active
    `)
    .eq('active', true)
    .order('name');

  if (error) throw error;
  return data.map(dish => ({
    id: dish.id,
    name: dish.name,
    description: dish.description || '',
    price: dish.price,
    type: dish.type,
    category: dish.category,
    history: dish.history || '',
    imageUrl: dish.image_url,
    minPeople: dish.min_people
  }));
};

export const createDish = async (dish: Omit<Dish, 'id'>) => {
  const { data, error } = await supabase
    .from('dishes')
    .insert({
      name: dish.name,
      description: dish.description,
      price: dish.price,
      type: dish.type,
      category: dish.category,
      history: dish.history,
      image_url: dish.imageUrl,
      min_people: dish.minPeople || 1
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateDish = async (id: string, dish: Partial<Dish>) => {
  const { data, error } = await supabase
    .from('dishes')
    .update({
      name: dish.name,
      description: dish.description,
      price: dish.price,
      type: dish.type,
      category: dish.category,
      history: dish.history,
      image_url: dish.imageUrl,
      min_people: dish.minPeople || 1
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteDish = async (id: string) => {
  const { error } = await supabase
    .from('dishes')
    .update({ active: false })
    .eq('id', id);

  if (error) throw error;
};