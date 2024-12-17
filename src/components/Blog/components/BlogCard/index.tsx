import React from 'react';
import { Calendar } from 'lucide-react';
import * as S from './styles';
import { formatDate } from '../../../../utils/dateFormatter';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  slug: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  image,
  category,
  slug
}) => {
  return (
    <S.Card>
      <S.ImageContainer>
        <S.Image src={image} alt={title} />
        <S.Category>{category}</S.Category>
      </S.ImageContainer>
      <S.Content>
        <S.Date>
          <Calendar size={16} />
          {formatDate(date)}
        </S.Date>
        <S.Title>{title}</S.Title>
        <S.Excerpt>{excerpt}</S.Excerpt>
        <S.ReadMore href={`/blog/${slug}`}>Read More</S.ReadMore>
      </S.Content>
    </S.Card>
  );
};