import { supabase } from './client';
import type { BuffetPackage } from '../../types/package';

export const getPackages = async () => {
  const { data, error } = await supabase
    .from('buffet_packages')
    .select(`
      id,
      name,
      description,
      price,
      min_people,
      image_url,
      category,
      package_dishes (
        dish_id
      )
    `)
    .eq('active', true)
    .order('name');

  if (error) throw error;

  return data.map(pkg => ({
    id: pkg.id,
    name: pkg.name,
    description: pkg.description || '',
    price: pkg.price,
    minPeople: pkg.min_people,
    imageUrl: pkg.image_url,
    category: pkg.category,
    dishIds: pkg.package_dishes.map((pd: any) => pd.dish_id)
  }));
};

export const createPackage = async (pkg: Omit<BuffetPackage, 'id'>) => {
  const { data, error } = await supabase
    .from('buffet_packages')
    .insert({
      name: pkg.name,
      description: pkg.description,
      price: pkg.price,
      min_people: pkg.minPeople,
      image_url: pkg.imageUrl,
      category: pkg.category
    })
    .select()
    .single();

  if (error) throw error;

  // Add package dishes
  if (pkg.dishIds.length > 0) {
    const { error: dishError } = await supabase
      .from('package_dishes')
      .insert(
        pkg.dishIds.map(dishId => ({
          package_id: data.id,
          dish_id: dishId
        }))
      );

    if (dishError) throw dishError;
  }

  return data;
};

export const updatePackage = async (id: string, pkg: Partial<BuffetPackage>) => {
  const { error } = await supabase
    .from('buffet_packages')
    .update({
      name: pkg.name,
      description: pkg.description,
      price: pkg.price,
      min_people: pkg.minPeople,
      image_url: pkg.imageUrl,
      category: pkg.category
    })
    .eq('id', id);

  if (error) throw error;

  if (pkg.dishIds) {
    // Delete existing package dishes
    await supabase
      .from('package_dishes')
      .delete()
      .eq('package_id', id);

    // Add new package dishes
    if (pkg.dishIds.length > 0) {
      const { error: dishError } = await supabase
        .from('package_dishes')
        .insert(
          pkg.dishIds.map(dishId => ({
            package_id: id,
            dish_id: dishId
          }))
        );

      if (dishError) throw dishError;
    }
  }
};

export const deletePackage = async (id: string) => {
  const { error } = await supabase
    .from('buffet_packages')
    .update({ active: false })
    .eq('id', id);

  if (error) throw error;
};