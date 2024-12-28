import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase/client';
import type { CallbackRequest } from '../types/forms';

export const useCallbackRequests = () => {
  const [callbacks, setCallbacks] = useState<CallbackRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCallbacks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('callback_requests')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) throw error;
      setCallbacks(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch callback requests'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCallbacks();
  }, []);

  return { callbacks, loading, error, refresh: fetchCallbacks };
};