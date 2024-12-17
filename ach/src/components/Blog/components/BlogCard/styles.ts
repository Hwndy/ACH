import styled from 'styled-components';

export const Card = styled.article`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 200px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Category = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--secondary);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Content = styled.div`
  padding: 1.5rem;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  color: var(--primary);
  margin-bottom: 0.75rem;
  line-height: 1.4;
`;

export const Excerpt = styled.p`
  color: var(--text);
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const ReadMore = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--primary);
  font-weight: 600;
  transition: color 0.2s;

  &:hover {
    color: var(--secondary);
  }
`;