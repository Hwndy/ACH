import styled from 'styled-components';

export const Footer = styled.footer`
  background: #1f2937;
  color: white;
  padding: 4rem 2rem 2rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const Column = styled.div``;

export const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: white;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 0.75rem;
`;

export const Link = styled.a`
  color: #9ca3af;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  color: #9ca3af;
  font-size: 1.5rem;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #374151;
  color: #9ca3af;
`;