import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: white;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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

export const Content = styled.div`
  padding: 2rem 0;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--text);
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  color: #64748b;
  font-size: 1rem;
`;