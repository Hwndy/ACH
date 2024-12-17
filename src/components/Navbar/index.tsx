import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import * as S from './styles';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <S.Nav>
      <S.NavContainer>
        <S.Logo>
          <span>AKBOY Creative Hub</span>
        </S.Logo>

        <S.NavLinks>
          <S.NavLink href="#home">Home</S.NavLink>
          <S.NavLink href="#services">Services</S.NavLink>
          <S.NavLink href="#about">About Us</S.NavLink>
          <S.NavLink href="#contact">Contact</S.NavLink>
        </S.NavLinks>

        <S.MobileMenuButton onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </S.MobileMenuButton>

        <S.MobileMenu $isOpen={isOpen}>
          <S.NavLink href="#home">Home</S.NavLink>
          <S.NavLink href="#services">Services</S.NavLink>
          <S.NavLink href="#about">About Us</S.NavLink>
          <S.NavLink href="#contact">Contact</S.NavLink>
        </S.MobileMenu>
      </S.NavContainer>
    </S.Nav>
  );
};