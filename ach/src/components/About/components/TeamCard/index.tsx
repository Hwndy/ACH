import React from 'react';
import * as S from './styles';

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ name, role, description, image }) => {
  return (
    <S.Card>
      <S.ImageWrapper>
        <img src={image} alt={name} />
      </S.ImageWrapper>
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Role>{role}</S.Role>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Card>
  );
};