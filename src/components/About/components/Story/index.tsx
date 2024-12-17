import React from 'react';
import * as S from './styles';

export const Story = () => {
  return (
    <S.StorySection>
      <S.Container>
        <S.Title>Our Story</S.Title>
        <S.Content>
          <S.Text>
            AKBOY Creative Hub was founded in 2024 with a vision to bridge the gap between 
            creativity and academic success. What started as a passion project has grown 
            into a trusted partner for parents, students, and entrepreneurs across Nigeria.
          </S.Text>
          <S.ImageWrapper>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Team collaboration" 
            />
          </S.ImageWrapper>
        </S.Content>
      </S.Container>
    </S.StorySection>
  );
};