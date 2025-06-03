import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FiEye, FiHeart } from "react-icons/fi";
import { getLikeCount, incrementPageView, toggleLike, hasClientLikedPage, getPageViews, isSupabaseAvailable } from "../lib/supabase";

interface PageAnalyticsProps {
  pagePath?: string;
}

const PageAnalytics: React.FC<PageAnalyticsProps> = ({ pagePath }) => {
  const location = useLocation();
  const path = pagePath || location.pathname;
  
  const [viewCount, setViewCount] = useState<number>(0);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLiking, setIsLiking] = useState<boolean>(false);

  const incrementAttemptedForPathRef = useRef<Set<string>>(new Set());
  const currentPathForRefReset = useRef<string | undefined | null>(null);
  const mountedRef = useRef<boolean>(false);

  useEffect(() => {
    mountedRef.current = true;
    currentPathForRefReset.current = path;
    return () => {
      mountedRef.current = false;
    };
  }, []); 

  useEffect(() => {
    if (path !== currentPathForRefReset.current) {
        if (currentPathForRefReset.current) {
            incrementAttemptedForPathRef.current.delete(currentPathForRefReset.current);
        }
        currentPathForRefReset.current = path;
    }

    let isActive = true;
    
    const loadAnalytics = async () => {
      if (!path) {
        if (mountedRef.current && isActive) setLoading(false);
        return;
      }

      // Check if Supabase is available
      if (!isSupabaseAvailable()) {
        console.warn('Analytics disabled: Supabase not available');
        if (mountedRef.current && isActive) {
          setViewCount(0);
          setLikeCount(0);
          setLiked(false);
          setLoading(false);
        }
        return;
      }

      const viewKey = `viewed-${path}`;
      const hasViewedBefore = localStorage.getItem(viewKey) === 'true';
      
      // Only attempt to increment if the page hasn't been viewed by this browser ever
      const shouldAttemptIncrement = !hasViewedBefore;

      if (mountedRef.current && isActive) setLoading(true);
      try {
        let viewCountPromise: Promise<number>;

        if (shouldAttemptIncrement) {
          viewCountPromise = incrementPageView(path).then(newCount => {
            if (isActive && mountedRef.current) {
                localStorage.setItem(viewKey, 'true');
            }
            return newCount;
          }).catch(error => {
            console.error('Failed to increment page view, view not marked.', error);
            throw error;
          });
        } else {
          // Already viewed from this browser, just fetch the current count
          viewCountPromise = getPageViews(path);
        }
        
        const [fetchedViewCount, fetchedLikeCount, fetchedHasLiked] = await Promise.all([
          viewCountPromise,
          getLikeCount(path),
          hasClientLikedPage(path)
        ]);
        
        if (mountedRef.current && isActive) {
          setViewCount(fetchedViewCount);
          setLikeCount(fetchedLikeCount);
          setLiked(fetchedHasLiked);
        }
      } catch (error) {
        console.error('Error loading analytics:', error);
        if (mountedRef.current && isActive) {
          setViewCount(prev => prev);
          setLikeCount(prev => prev);
          setLiked(prev => prev);
        }
      } finally {
        if (mountedRef.current && isActive) {
          setLoading(false);
        }
      }
    };
    
    if (mountedRef.current && path) {
        loadAnalytics();
    } else {
        if(mountedRef.current && !path && loading && isActive) {
            setLoading(false);
        }
    }

    return () => {
      isActive = false;
    };

  }, [path]);
  
  const handleLikeClick = async () => {
    if (!path || isLiking || !mountedRef.current) {
      return;
    }

    if (!isSupabaseAvailable()) {
      console.warn('Cannot toggle like: Supabase not available');
      return;
    }

    if (mountedRef.current) setIsLiking(true);
    const originalLikedStatus = liked;
    const originalLikeCount = likeCount;

    if (mountedRef.current) {
      const newOptimisticLiked = !originalLikedStatus;
      const newOptimisticLikeCount = !originalLikedStatus ? originalLikeCount + 1 : Math.max(0, originalLikeCount - 1);
      setLiked(newOptimisticLiked);
      setLikeCount(newOptimisticLikeCount);
    }

    try {
      const newActualLikedStatus = await toggleLike(path);
      
      if (mountedRef.current) {
        setLiked(newActualLikedStatus);
        const updatedLikeCount = await getLikeCount(path);
        if (mountedRef.current) {
          setLikeCount(updatedLikeCount);
        }
      }
    } catch (error) {
      console.error(`Error toggling like for path ${path}:`, error);
      if (mountedRef.current) {
        setLiked(originalLikedStatus);
        setLikeCount(originalLikeCount);
      }
    } finally {
      if (mountedRef.current) {
        setIsLiking(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center space-x-4 text-lg opacity-70">
        <span>Loading analytics...</span>
      </div>
    );
  }

  // Show disabled state when Supabase is not available
  if (!isSupabaseAvailable()) {
    return (
      <div className="flex items-center space-x-4 text-lg opacity-50">
        <div className="flex items-center">
          <FiEye className="w-6 h-6 mr-2" />
          <span className="text-xl">--</span>
        </div>
        <div className="flex items-center">
          <FiHeart className="w-6 h-6 mr-2" />
          <span className="text-xl">--</span>
        </div>
        <span className="text-sm">(Analytics disabled)</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-5 text-lg">
      <div className="flex items-center">
        <FiEye className="w-6 h-6 mr-2" />
        <span className="text-xl">{viewCount}</span>
      </div>
      
      <div className="flex items-center">
        <button 
          onClick={handleLikeClick}
          disabled={isLiking}
          className={`flex items-center focus:outline-none ${liked ? 'text-primary' : ''} ${isLiking ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-label={liked ? "Unlike this page" : "Like this page"}
        >
          <FiHeart className={`w-6 h-6 mr-2 ${liked ? 'fill-primary' : ''}`} />
          <span className="text-xl">{likeCount}</span>
        </button>
      </div>
    </div>
  );
};

export default PageAnalytics; 