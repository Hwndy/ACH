import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: white;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: var(--secondary);
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  border: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

interface MobileMenuProps {
  $isOpen: boolean;
}

export const MobileMenu = styled.div<MobileMenuProps>`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--primary);
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: block;
  }

  ${NavLink} {
    display: block;
    padding: 0.5rem 0;
  }
`;