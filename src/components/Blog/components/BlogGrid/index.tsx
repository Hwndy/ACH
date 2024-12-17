import React from 'react';
import { BlogCard } from '../BlogCard';
import * as S from './styles';
import { useBlogPosts } from '../../../../hooks/useBlogPosts';

export const BlogGrid = () => {
  const { posts } = useBlogPosts();

  return (
    <S.Grid>
      {posts.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </S.Grid>
  );
};