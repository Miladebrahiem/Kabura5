import { supabase } from './client';

export const createTestUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/admin/buffet`
    }
  });

  if (error) throw error;
  return data;
};