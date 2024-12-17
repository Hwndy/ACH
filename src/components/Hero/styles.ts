import styled from 'styled-components';

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 100, 0, 0.8), rgba(255, 215, 0, 0.8));
  color: white;
  padding: 2rem;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #FFD700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: white;
  max-width: 800px;
  margin: 0 auto 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CTAButton = styled.button`
  background: var(--secondary);
  color: var(--primary);
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary);
    color: var(--secondary);
  }
`;