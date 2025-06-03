import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Analytics features will be disabled.');
  console.warn('Missing:', {
    VITE_SUPABASE_URL: !supabaseUrl,
    VITE_SUPABASE_ANON_KEY: !supabaseAnonKey
  });
}

// Create Supabase client with validation
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper function to check if Supabase is available
export const isSupabaseAvailable = (): boolean => {
  return supabase !== null;
};

export interface PageView {
  id?: number;
  page_path: string;
  view_count: number;
  created_at?: string;
}

export interface PageLike {
  id?: number;
  page_path: string;
  user_id?: string;
  created_at?: string;
}

// Analytics functions
export const incrementPageView = async (pagePath: string): Promise<number> => {
  if (!supabase) {
    console.warn('Supabase not available, returning 0 for page views');
    return 0;
  }

  const { data, error } = await supabase.rpc('increment_page_view_rpc', { page_path_param: pagePath });

  if (error) {
    console.error(`Error calling increment_page_view_rpc for ${pagePath}:`, error);
    try {
      const currentViewsData = await getPageViews(pagePath);
      console.warn(`RPC failed for ${pagePath}, returning last known views: ${currentViewsData}`);
      return currentViewsData;
    } catch (getViewsError) {
      console.error(`Failed to even getPageViews after RPC error for ${pagePath}:`, getViewsError);
      return 0; 
    }
  }
  return data !== null && data !== undefined ? Number(data) : 0;
};

export const getPageViews = async (pagePath: string): Promise<number> => {
  if (!supabase) {
    console.warn('Supabase not available, returning 0 for page views');
    return 0;
  }

  try {
    const { data, error } = await supabase
      .from('page_views')
      .select('view_count')
      .eq('page_path', pagePath);

    if (error) {
      console.error(`Error getting page views for ${pagePath}:`, error);
      return 0;
    }
    return data && data.length > 0 ? data[0].view_count : 0;
  } catch (err) {
    console.error(`Exception in getPageViews for ${pagePath}:`, err);
    return 0;
  }
};

export const getLikeCount = async (pagePath: string): Promise<number> => {
  if (!supabase) {
    console.warn('Supabase not available, returning 0 for like count');
    return 0;
  }

  try {
    const { count, error } = await supabase
      .from('page_likes')
      .select('*', { count: 'exact', head: true })
      .eq('page_path', pagePath);
    
    if (error) {
      console.error('Error getting like count:', error);
      return 0;
    }
    
    return count || 0;
  } catch (err) {
    console.error('Exception getting like count:', err);
    return 0;
  }
};

// Get a client ID that persists between sessions
export const getClientId = (): string => {
  let clientId = localStorage.getItem('client_id');
  if (!clientId) {
    clientId = `client_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem('client_id', clientId);
  }
  return clientId;
};

// Check if the current client has liked a page
export const hasClientLikedPage = async (pagePath: string): Promise<boolean> => {
  if (!supabase) {
    console.warn('Supabase not available, returning false for like status');
    return false;
  }

  try {
    const clientId = getClientId();
    
    const { data, error } = await supabase
      .from('page_likes')
      .select('*')
      .eq('page_path', pagePath)
      .eq('user_id', clientId);
    
    if (error) {
      console.error('Error checking like status:', error);
      return false;
    }
    
    return data && data.length > 0;
  } catch (err) {
    console.error('Exception checking like status:', err);
    return false;
  }
};

export const toggleLike = async (pagePath: string): Promise<boolean> => {
  if (!supabase) {
    console.warn('Supabase not available, cannot toggle like');
    throw new Error('Supabase not available');
  }

  const clientId = getClientId();
  
  // Check if the user already liked this page
  const { data: existingLike, error: selectError } = await supabase
    .from('page_likes')
    .select('id')
    .eq('page_path', pagePath)
    .eq('user_id', clientId)
    .maybeSingle();
  
  if (selectError) {
    console.error('Error checking existing like:', selectError);
    throw selectError; // Propagate error to be handled by the caller
  }
  
  if (existingLike) {
    // Unlike: Remove the like
    const { error: deleteError } = await supabase
      .from('page_likes')
      .delete()
      .eq('id', existingLike.id); // Use the id from the fetched like
      
    if (deleteError) {
      console.error('Error removing like:', deleteError);
      throw deleteError; // Propagate error
    }
    return false; // Successfully unliked
  } else {
    // Like: Add a new like
    const { error: insertError } = await supabase
      .from('page_likes')
      .insert([{ 
        page_path: pagePath, 
        user_id: clientId 
      }]);
      
    if (insertError) {
      console.error('Error adding like:', insertError);
      throw insertError; // Propagate error
    }
    return true; // Successfully liked
  }
}; 