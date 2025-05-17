import { createClient } from '@supabase/supabase-js';

// Use environment variables for Supabase credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
  try {
    // Try to get the existing record
    const { data: existingViews, error: selectError } = await supabase
      .from('page_views')
      .select('*')
      .eq('page_path', pagePath);
    
    if (selectError) {
      console.error('Error fetching page views:', selectError);
      return 0;
    }
    
    const existingView = existingViews && existingViews.length > 0 ? existingViews[0] : null;
    
    if (existingView) {
      // Update the existing record
      const newCount = existingView.view_count + 1;
      const { error: updateError } = await supabase
        .from('page_views')
        .update({ view_count: newCount })
        .eq('page_path', pagePath);
        
      if (updateError) {
        console.error('Error updating view count:', updateError);
        return existingView.view_count;
      }
      
      return newCount;
    } else {
      // Insert a new record
      const { error: insertError } = await supabase
        .from('page_views')
        .insert([{ page_path: pagePath, view_count: 1 }]);
        
      if (insertError) {
        console.error('Error inserting new view:', insertError);
        return 0;
      }
      
      return 1;
    }
  } catch (err) {
    console.error('Exception incrementing page view:', err);
    return 0;
  }
};

export const getPageViews = async (pagePath: string): Promise<number> => {
  try {
    const { data, error } = await supabase
      .from('page_views')
      .select('view_count')
      .eq('page_path', pagePath);
    
    if (error) {
      console.error('Error getting page views:', error);
      return 0;
    }
    
    return data && data.length > 0 ? data[0].view_count : 0;
  } catch (err) {
    console.error('Exception getting page views:', err);
    return 0;
  }
};

export const getLikeCount = async (pagePath: string): Promise<number> => {
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
  try {
    const clientId = getClientId();
    
    // Check if the user already liked this page
    const { data: existingLikes, error: selectError } = await supabase
      .from('page_likes')
      .select('*')
      .eq('page_path', pagePath)
      .eq('user_id', clientId);
    
    if (selectError) {
      console.error('Error checking existing like:', selectError);
      return false;
    }
    
    const existingLike = existingLikes && existingLikes.length > 0 ? existingLikes[0] : null;
    
    if (existingLike) {
      // Unlike: Remove the like
      const { error: deleteError } = await supabase
        .from('page_likes')
        .delete()
        .eq('id', existingLike.id);
        
      if (deleteError) {
        console.error('Error removing like:', deleteError);
        return true;
      }
      return false;
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
        return false;
      }
      return true;
    }
  } catch (err) {
    console.error('Exception toggling like:', err);
    return false;
  }
}; 