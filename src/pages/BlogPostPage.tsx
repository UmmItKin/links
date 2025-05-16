import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { Highlight, themes } from "prism-react-renderer";
import { FaGithub, FaEdit, FaClock, FaCalendarAlt, FaTags, FaArrowLeft } from "react-icons/fa";
import { Post } from "../utils/postsUtil";

const MarkdownComponents = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-10 mb-4 text-white" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-8 mb-3 text-white border-b border-gray-700 pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-6 mb-2 text-white" {...props} />,
  h4: (props: any) => <h4 className="text-lg font-semibold mt-5 mb-2 text-white" {...props} />,
  p: (props: any) => <p className="my-4 text-gray-200 leading-relaxed text-lg" {...props} />,
  a: (props: any) => <a className="text-myPink1 hover:underline" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 my-4 text-gray-200 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 my-4 text-gray-200 space-y-2" {...props} />,
  li: (props: any) => <li className="my-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-myPink1/50 pl-4 my-6 italic text-gray-300 bg-gray-800/30 py-2 pr-4 rounded-r" {...props} />
  ),
  code: ({ node, inline, className, children, ...props }: any) => {
    if (inline) {
      return (
        <code
          className="px-1.5 py-0.5 mx-0.5 bg-gray-800 rounded text-gray-200 font-mono text-sm"
          {...props}
        >
          {children}
        </code>
      );
    }

    // Extract language from className (format: language-javascript)
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "";

    return (
      <div className="my-6 rounded-lg overflow-hidden border border-gray-700/30 shadow-lg">
        <div className="flex justify-between items-center px-4 py-2 bg-gray-800/80 backdrop-blur-sm text-gray-400 text-xs">
          <span className="font-mono">{language || "Code"}</span>
        </div>
        <Highlight
          theme={themes.nightOwl}
          code={String(children).replace(/\n$/, "")}
          language={language || "text"}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className="p-4 overflow-x-auto bg-gray-900/50 backdrop-blur-sm"
              style={style}
            >
              {tokens.map((line, i) => {
                // Extract props without the key
                const lineProps = getLineProps({ line, key: i });
                delete lineProps.key;
                
                return (
                  <div key={i} {...lineProps}>
                    <span className="inline-block w-8 mr-2 text-right text-gray-500 select-none opacity-50">
                      {i + 1}
                    </span>
                    {line.map((token, key) => {
                      // Extract props without the key
                      const tokenProps = getTokenProps({ token, key });
                      delete tokenProps.key;
                      
                      return <span key={key} {...tokenProps} />;
                    })}
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>
      </div>
    );
  },
  pre: (props: any) => <div className="my-4" {...props} />,
  strong: (props: any) => <strong className="font-bold text-white" {...props} />,
  hr: () => <hr className="my-8 border-gray-700" />,
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-gray-700 rounded-lg overflow-hidden" {...props} />
    </div>
  ),
  th: (props: any) => <th className="p-2 border border-gray-700 bg-gray-800/80 text-left font-semibold" {...props} />,
  td: (props: any) => <td className="p-2 border border-gray-700" {...props} />,
  img: (props: any) => <img className="max-w-full h-auto my-6 rounded-lg shadow-lg" {...props} alt={props.alt || ''} />
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) {
      setError("No slug provided");
      setLoading(false);
      return;
    }

    // Get the full slug from the URL, which may include subdirectory/filename pattern
    const fullSlug = window.location.hash.replace('#/blog/', '');

    const fetchPost = async () => {
      try {
        const { getPostBySlug } = await import("../utils/postsUtil");
        const foundPost = await getPostBySlug(fullSlug);
        
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError(`Post with slug "${slug}" not found`);
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Failed to load post:", err);
        setError("Failed to load post");
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Handle tag click to navigate to filtered post list
  const handleTagClick = (tag: string) => {
    navigate(`/blog?tag=${encodeURIComponent(tag)}`);
  };

  // GitHub edit URL 
  const getGitHubEditUrl = () => {
    if (!post || !post.filename) return '#';
    return `https://github.com/UmmItC/blob/master/src/posts/${post.filename}`;
  };

  // Calculate reading time (rough estimate: 200 words per minute)
  const getReadingTime = (content: string = '') => {
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return minutes > 0 ? `${minutes} min read` : '1 min read';
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-6 md:px-12 flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading post...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-400 mb-4">Error</h1>
            <p className="mb-6">{error || "Unknown error"}</p>
            <Link 
              to="/blog" 
              className="inline-block px-4 py-2 bg-transparent backdrop-blur-sm
                        border border-gray-700/30 rounded-full
                        transition-all duration-300 hover:bg-gray-800/20 hover:text-myPink1
                        hover:shadow-lg hover:shadow-myPink1/10 hover:border-myPink1/50
                        text-gray-300 text-bold font-medium tracking-wide"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header Banner */}
      <div className="w-full backdrop-blur-sm mb-10 py-10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
          {/* Navigation buttons - positioned absolutely */}
          <div className="absolute left-6 md:left-12 top-0">
            <Link 
              to="/blog" 
              className="inline-flex items-center space-x-2 px-4 py-2 bg-transparent backdrop-blur-sm
                        border border-gray-700/30 rounded-full
                        transition-all duration-300 hover:bg-gray-800/20 hover:text-myPink1 hover:scale-105
                        hover:shadow-lg hover:shadow-myPink1/10 hover:border-myPink1/50
                        text-gray-300 text-bold font-medium tracking-wide"
            >
              <FaArrowLeft className="mr-2" /> Back to Blog
            </Link>
          </div>
          
          <div className="absolute right-6 md:right-12 top-0">
            <a 
              href={getGitHubEditUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-transparent backdrop-blur-sm
                        border border-gray-700/30 rounded-full
                        transition-all duration-300 hover:bg-gray-800/20 hover:text-myPink1 hover:scale-105
                        hover:shadow-lg hover:shadow-myPink1/10 hover:border-myPink1/50
                        text-gray-300 text-bold font-medium tracking-wide"
            >
              <FaEdit className="mr-1" /> Edit on GitHub
            </a>
          </div>
          
          {/* Title and metadata - centered */}
          <div className="text-center pt-12 md:pt-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{post.title}</h1>
            
            <div className="flex flex-wrap items-center justify-center text-gray-400 mb-6 gap-4">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-myPink1" />
                <span>{post.date}</span>
              </div>
              
              {post.lastmod && (
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-blue-400" />
                  <span className="text-blue-400">Updated: {post.lastmod}</span>
                </div>
              )}
              
              <div className="flex items-center">
                <FaClock className="mr-2 text-myPink1" />
                <span>{getReadingTime(post.content)}</span>
              </div>
              
              <div className="flex items-center flex-wrap gap-2">
                <FaTags className="text-myPink1" />
                {post.tags.map(tag => (
                  <button 
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className="px-3 py-1 text-xs bg-gray-800/70 rounded-full border border-gray-700/30
                              hover:bg-gray-700/70 hover:border-myPink1/50 hover:text-myPink1
                              transition-all duration-300 cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <article className="prose prose-invert prose-pink prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            components={MarkdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        </article>
          
        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-700/50 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/UmmItC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-myPink1 transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>
          
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-transparent backdrop-blur-sm
                      border border-gray-700/30 rounded-full
                      transition-all duration-300 hover:bg-gray-800/20 hover:text-myPink1
                      hover:shadow-lg hover:shadow-myPink1/10 hover:border-myPink1/50
                      text-gray-300 text-bold font-medium tracking-wide"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage; 