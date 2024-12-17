import React from 'react';
import * as S from './styles';

export const Hero = () => {
  return (
    <S.HeroSection>
      <S.HeroContent>
        <S.Title>Empowering Creativity, Enabling Success</S.Title>
        <S.Subtitle>
          AKBOY Creative Hub offers top-notch educational consultancy, tutorial services, 
          and creative designs tailored to your needs. With years of experience and innovative 
          solutions, we help students and businesses succeed.
        </S.Subtitle>
        <S.CTAButton>Explore Our Services</S.CTAButton>
      </S.HeroContent>
    </S.HeroSection>
  );
};