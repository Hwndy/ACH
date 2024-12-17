import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImageWrapper = styled.div`
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 1.5rem;
`;

export const Name = styled.h3`
  font-size: 1.25rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

export const Role = styled.p`
  color: var(--text);
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: #64748b;
  line-height: 1.6;
`;