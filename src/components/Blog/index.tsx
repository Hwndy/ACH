import React from 'react';
import { BlogGrid } from './components/BlogGrid';
import * as S from './styles';

export const Blog = () => {
  return (
    <S.BlogSection id="blog">
      <S.Container>
        <S.SectionTitle>Educational Insights</S.SectionTitle>
        <S.Description>
          Stay updated with the latest educational trends, teaching methodologies, 
          and success stories from our community.
        </S.Description>
        <BlogGrid />
      </S.Container>
    </S.BlogSection>
  );
};