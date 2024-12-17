import styled from 'styled-components';

export const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background: #f8fafc;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 3rem;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--secondary);
  }
`;

export const IconWrapper = styled.div`
  color: var(--primary);
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary);
`;

export const ServiceDescription = styled.p`
  color: var(--text);
  line-height: 1.6;
`;