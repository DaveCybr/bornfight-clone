import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Yearbook {
  id: string;
  school_name: string;
  year: number;
  thumbnail_url: string;
  ebook_url: string;
  location: string | null;
  created_at: string;
  updated_at: string;
}

export function useYearbooks() {
  const [yearbooks, setYearbooks] = useState<Yearbook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchYearbooks = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('yearbooks')
      .select('*')
      .order('year', { ascending: false })
      .order('school_name', { ascending: true });

    if (error) {
      setError(error.message);
    } else {
      setYearbooks(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchYearbooks();
  }, []);

  const addYearbook = async (yearbook: Omit<Yearbook, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('yearbooks')
      .insert([yearbook])
      .select()
      .single();

    if (error) throw error;
    await fetchYearbooks();
    return data;
  };

  const updateYearbook = async (id: string, yearbook: Partial<Omit<Yearbook, 'id' | 'created_at' | 'updated_at'>>) => {
    const { data, error } = await supabase
      .from('yearbooks')
      .update(yearbook)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    await fetchYearbooks();
    return data;
  };

  const deleteYearbook = async (id: string) => {
    const { error } = await supabase
      .from('yearbooks')
      .delete()
      .eq('id', id);

    if (error) throw error;
    await fetchYearbooks();
  };

  return {
    yearbooks,
    loading,
    error,
    fetchYearbooks,
    addYearbook,
    updateYearbook,
    deleteYearbook
  };
}
