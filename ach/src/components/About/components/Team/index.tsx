import React from 'react';
import { TeamCard } from '../TeamCard';
import * as S from './styles';


const teamMembers = [
  {
    name: 'Oluwakeye Mujeedah',
    role: 'Social Media Manager',
    description: 'Ensures the team remains agile and responsive in our social media presence.',
    image: '/oluwakeye.jpg'
  },
  {
    name: 'Sulaimon Ibrahim',
    role: 'Full Stack Developer',
    description: 'A passionate developer and master electrician with vast experience in web design and development.',
    image: '/IBM.jpg'
  },
  {
    name: 'Our Tutors',
    role: 'Education Team',
    description: 'Dedicated educators specializing in various subjects, committed to student success.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

export const Team = () => {
  return (
    <S.TeamSection>
      <S.Container>
        <S.Title>Our Team</S.Title>
        <S.Grid>
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </S.Grid>
      </S.Container>
    </S.TeamSection>
  );
};