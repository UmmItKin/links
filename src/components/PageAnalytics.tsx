import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiEye, FiHeart } from "react-icons/fi";
import { getLikeCount, incrementPageView, toggleLike, hasClientLikedPage } from "../lib/supabase";

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

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        // Record page view
        const views = await incrementPageView(path);
        setViewCount(views);
        
        // Get likes
        const likes = await getLikeCount(path);
        setLikeCount(likes);
        
        // Check if user has liked this page
        const hasLiked = await hasClientLikedPage(path);
        setLiked(hasLiked);
      } catch (error) {
        console.error("Error loading analytics:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadAnalytics();
  }, [path]);
  
  const handleLikeClick = async () => {
    try {
      const isLiked = await toggleLike(path);
      setLiked(isLiked);
      setLikeCount(prev => isLiked ? prev + 1 : Math.max(0, prev - 1));
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center space-x-4 text-lg opacity-70">
        <span>Loading analytics...</span>
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
          className={`flex items-center focus:outline-none ${liked ? 'text-primary' : ''}`}
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