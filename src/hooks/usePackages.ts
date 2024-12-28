import { useState, useEffect } from 'react';
import { getPackages, createPackage, updatePackage, deletePackage } from '../lib/supabase/packages';
import type { BuffetPackage } from '../types/package';

export const usePackages = () => {
  const [packages, setPackages] = useState<BuffetPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      const data = await getPackages();
      setPackages(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch packages'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const addPackage = async (pkg: Omit<BuffetPackage, 'id'>) => {
    try {
      await createPackage(pkg);
      await fetchPackages();
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to create package');
    }
  };

  const editPackage = async (id: string, pkg: Partial<BuffetPackage>) => {
    try {
      await updatePackage(id, pkg);
      await fetchPackages();
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to update package');
    }
  };

  const removePackage = async (id: string) => {
    try {
      await deletePackage(id);
      await fetchPackages();
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to delete package');
    }
  };

  return {
    packages,
    loading,
    error,
    addPackage,
    editPackage,
    removePackage,
    refresh: fetchPackages
  };
};