import React, { useEffect, useState } from "react";
import { FaRss, FaClock, FaCalendarAlt, FaTags, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Post } from "../utils/postsUtil";

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Check for tag filter in URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tagParam = searchParams.get('tag');
    if (tagParam) {
      setActiveTag(tagParam);
    } else {
      setActiveTag(null);
    }
  }, [location.search]);

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { getAllPosts } = await import("../utils/postsUtil");
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load posts:", err);
        setError("Failed to load posts. Please try again later.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts when activeTag changes
  useEffect(() => {
    if (activeTag) {
      setFilteredPosts(posts.filter(post => post.tags.includes(activeTag)));
    } else {
      setFilteredPosts(posts);
    }
    
    // Debug the posts data
    console.log("Posts data:", posts);
  }, [posts, activeTag]);

  // Handle tag click
  const handleTagClick = (tag: string) => {
    // If already filtered by this tag, clear the filter
    if (tag === activeTag) {
      setActiveTag(null);
      navigate('/blog');
    } else {
      setActiveTag(tag);
      navigate(`/blog?tag=${encodeURIComponent(tag)}`);
    }
  };

  // Get all unique tags
  const allTags = React.useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, [posts]);

  // Calculate reading time (rough estimate: 200 words per minute)
  const getReadingTime = (excerpt: string = '') => {
    const words = excerpt.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return minutes > 0 ? `${minutes} min read` : '1 min read';
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-6 md:px-12 flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-6 md:px-12 flex items-center justify-center">
        <div className="text-red-400 text-center">
          <p className="text-xl font-bold mb-2">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header Banner */}
      <div className="w-full backdrop-blur-sm mb-10 py-10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
          {/* RSS Button - Positioned absolutely */}
          <div className="absolute right-6 md:right-12 top-0">
            <a 
              href="/rss.xml" 
              className="inline-flex items-center space-x-2 px-4 py-2 bg-transparent backdrop-blur-sm
                        border border-gray-700/30 rounded-full
                        transition-all duration-300 hover:bg-gray-800/20 hover:text-myPink1 hover:scale-105
                        hover:shadow-lg hover:shadow-myPink1/10 hover:border-myPink1/50
                        text-gray-300 text-bold font-medium tracking-wide"
            >
              <FaRss className="text-myPink1 mr-2" />
              <span>RSS - not yet</span>
            </a>
          </div>

          {/* Centered Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Blog</h1>
          </div>

          {/* Tag filters */}
          {allTags.length > 0 && (
            <div className="mb-4 text-center">
              <h2 className="text-xl text-white mb-3">Filter by tag:</h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`px-3 py-1 text-sm rounded-full border transition-all duration-300 cursor-pointer
                      ${activeTag === tag 
                        ? 'bg-myPink1/20 border-myPink1 text-myPink1' 
                        : 'bg-gray-800/50 border-gray-700/30 text-gray-300 hover:bg-gray-700/70 hover:border-myPink1/50 hover:text-myPink1'
                      }`}
                  >
                    {tag}
                  </button>
                ))}
                {activeTag && (
                  <button
                    onClick={() => {
                      setActiveTag(null);
                      navigate('/blog');
                    }}
                    className="px-3 py-1 text-sm bg-gray-800/50 rounded-full border border-gray-700/30
                              hover:bg-gray-700/70 hover:border-red-400/50 hover:text-red-400
                              transition-all duration-300 cursor-pointer"
                  >
                    Clear filter
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Active filter indicator */}
        {activeTag && (
          <div className="mb-8 p-4 bg-gray-800/30 backdrop-blur-sm border-l-4 border-myPink1 rounded-r-lg">
            <p className="text-gray-200">
              Showing posts tagged with: <span className="text-myPink1 font-semibold">{activeTag}</span>
            </p>
          </div>
        )}

        {filteredPosts.length === 0 ? (
          <div className="p-8 text-center backdrop-blur-sm">
            <p className="text-xl text-gray-300 mb-4">
              {activeTag 
                ? `No blog posts found with the tag "${activeTag}".` 
                : "No blog posts found. Add markdown files to the src/posts directory to get started."}
            </p>
            {activeTag && (
              <button
                onClick={() => {
                  setActiveTag(null);
                  navigate('/blog');
                }}
                className="px-4 py-2 bg-transparent backdrop-blur-sm
                          border border-gray-700/30 rounded-full
                          transition-all duration-300 hover:bg-gray-800/20 hover:text-myPink1
                          hover:shadow-lg hover:shadow-myPink1/10 hover:border-myPink1/50
                          text-gray-300 text-bold font-medium tracking-wide"
              >
                View all posts
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            {filteredPosts.map(post => (
              <article 
                key={post.id}
                className="p-6 md:p-8 backdrop-blur-sm
                          transition-all duration-300 hover:shadow-lg hover:shadow-myPink1/10"
              >
                {/* Article Header */}
                <div className="mb-4">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 hover:text-myPink1 transition-colors duration-300">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <div className="flex flex-wrap items-center text-gray-400 gap-4 mb-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-myPink1" size={14} />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    
                    {post.lastmod && (
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-blue-400" size={14} />
                        <span className="text-sm text-blue-400">Updated: {post.lastmod}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center">
                      <FaClock className="mr-2 text-myPink1" size={14} />
                      <span className="text-sm">{getReadingTime(post.excerpt)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Article Content */}
                <p className="mb-4 text-gray-200 leading-relaxed">{post.excerpt}</p>
                
                {/* Article Footer */}
                <div className="flex flex-wrap justify-between items-center mt-6">
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                    <FaTags className="text-myPink1 mt-1" size={14} />
                    {post.tags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`px-3 py-1 text-xs rounded-full border transition-all duration-300 cursor-pointer
                          ${activeTag === tag 
                            ? 'bg-myPink1/20 border-myPink1 text-myPink1' 
                            : 'bg-gray-800/50 border-gray-700/30 text-gray-300 hover:bg-gray-700/70 hover:border-myPink1/50 hover:text-myPink1'
                          }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="px-4 py-1 text-sm bg-transparent backdrop-blur-sm
                              border border-gray-700/30 rounded-full
                              transition-all duration-300 hover:bg-gray-800/20 hover:text-myPink1
                              hover:shadow-lg hover:shadow-myPink1/10 hover:border-myPink1/50
                              text-gray-300 font-medium tracking-wide"
                  >
                    Read post →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
        
        {/* Footer */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/UmmItC/links"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-transparent backdrop-blur-sm
                      border border-gray-700/30 rounded-full
                      transition-all duration-300 hover:bg-gray-800/20 hover:text-myPink1
                      hover:shadow-lg hover:shadow-myPink1/10 hover:border-myPink1/50
                      text-gray-300 text-bold font-medium tracking-wide"
          >
            <FaGithub className="mr-2" /> View repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
