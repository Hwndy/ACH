import { useState, useEffect } from 'react';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types/blog';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);

  // In a real application, you would fetch posts from an API here
  useEffect(() => {
    setPosts(blogPosts);
  }, []);

  return { posts };
};