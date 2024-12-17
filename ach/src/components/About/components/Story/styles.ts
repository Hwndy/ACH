import styled from 'styled-components';

export const StorySection = styled.div`
  padding: 4rem 2rem;
  background: white;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 2rem;
  text-align: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text);
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;