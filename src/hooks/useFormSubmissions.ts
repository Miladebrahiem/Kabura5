import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase/client';
import type { FormSubmission } from '../types/forms';

export const useFormSubmissions = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch submissions'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return { submissions, loading, error, refresh: fetchSubmissions };
};