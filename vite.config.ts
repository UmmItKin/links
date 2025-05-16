import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Virtual module plugin for handling markdown imports
function markdownPlugin() {
  const virtualModuleId = 'virtual:blog-posts';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  // Function to recursively find all markdown files
  function findMarkdownFiles(dir) {
    let results = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Recursively search subdirectories
        results = results.concat(findMarkdownFiles(fullPath));
      } 
      else if (item.endsWith('.md')) {
        // Store the full path
        results.push(fullPath);
      }
    }
    
    return results;
  }

  return {
    name: 'vite-plugin-markdown-posts',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        // Path to posts directory
        const postsDir = path.resolve(__dirname, 'src/posts');
        
        try {
          if (!fs.existsSync(postsDir)) {
            fs.mkdirSync(postsDir, { recursive: true });
            console.log('Created posts directory');
            return 'export const posts = [];';
          }
          
          // Find all markdown files in posts directory and its subdirectories
          const markdownFiles = findMarkdownFiles(postsDir);
          
          if (markdownFiles.length === 0) {
            console.warn('No markdown files found in posts directory or subdirectories');
            return 'export const posts = [];';
          }
  
          const posts = markdownFiles.map((filePath, index) => {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            
            // Use gray-matter to parse frontmatter during build
            const { data } = matter(fileContent);
            
            // Get filename relative to the posts directory
            const relativePath = path.relative(postsDir, filePath);
            // Create a slug from the relative path (preserve directory structure but remove .md)
            const slug = relativePath.replace(/\.md$/, '');
            
            // Debug log for frontmatter data
            console.log(`Processed ${relativePath}:`, JSON.stringify(data, null, 2));
            
            return {
              id: index + 1,
              slug,
              filename: relativePath, // Store relative path as filename for fetching
              title: data.title || 'Untitled',
              date: data.date || new Date().toISOString().split('T')[0],
              lastmod: data.lastmod !== undefined && data.lastmod !== false ? data.lastmod : false,
              excerpt: data.excerpt || '',
              tags: data.tags || [],
            };
          });

          // Sort posts by date, newest first
          posts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

          // Generate a module with the posts data
          return `export const posts = ${JSON.stringify(posts, null, 2)};`;
        } catch (err) {
          console.error('Error processing posts directory:', err);
          return 'export const posts = []; export const error = "Error loading posts";';
        }
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    markdownPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}) 