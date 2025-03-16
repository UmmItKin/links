import React from "react";
import { FaRss } from "react-icons/fa";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "Why my name is UmmIt",
      date: "2025-03-17",
      excerpt: "The story behind my unique username and how it represents me...",
      tags: ["personal", "story", "username"]
    },
    {
      id: 2,
      title: "My journey of my learning curve in Tech",
      date: "2025-03-17",
      excerpt: "How I learned to embrace the tech world and my experiences...",
      tags: ["personal", "learning", "tech"]
    },
    {
      id: 3,
      title: "About this website story and why i build it",
      date: "2025-03-17",
      excerpt: "The story behind this 'links' website and why I built it...",
      tags: ["personal", "website", "story"]
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Blog</h1>
          <a 
            href="/rss.xml" 
            className="inline-flex items-center space-x-2 px-4 py-2 bg-transparent backdrop-blur-sm
                      border border-gray-700/30 rounded-full
                      transition-all duration-300 hover:bg-gray-800/20 hover:text-myPink1 hover:scale-105
                      hover:shadow-lg hover:shadow-myPink1/10 hover:border-myPink1/50
                      text-gray-300 text-bold font-medium tracking-wide"
          >
            <FaRss className="text-myPink1" />
            <span>RSS - not yet</span>
          </a>
        </div>

        <p className="text-gray-300 mb-8">
          !!!! Not finished yet, so no RSS and no blog posts can be read.
        </p>

        <div className="space-y-12">
          {posts.map(post => (
            <article 
              key={post.id}
              className="p-6 border border-gray-700/30 rounded-xl backdrop-blur-sm
                        transition-all duration-300 hover:border-myPink1/30 hover:shadow-lg hover:shadow-myPink1/10"
            >
              <h2 className="text-2xl font-semibold mb-2 hover:text-myPink1 transition-colors duration-300">
                <a href={`/blog/${post.id}`}>{post.title}</a>
              </h2>
              <div className="text-sm text-gray-400 mb-4">{post.date}</div>
              <p className="mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs bg-gray-800/50 rounded-full border border-gray-700/30
                              hover:bg-gray-700/70 hover:border-myPink1/50 hover:text-myPink1
                              transition-all duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
