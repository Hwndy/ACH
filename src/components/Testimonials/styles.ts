import styled from 'styled-components';

export const TestimonialsSection = styled.section`
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
  color: var(--text);
  margin-bottom: 3rem;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Quote = styled.p`
  font-style: italic;
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorInfo = styled.div``;

export const AuthorName = styled.h4`
  color: var(--text);
  margin-bottom: 0.25rem;
`;

export const AuthorTitle = styled.p`
  color: #64748b;
  font-size: 0.875rem;
`;