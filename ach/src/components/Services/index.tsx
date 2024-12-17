import React from 'react';
import { BookOpen, PenTool, Globe, Users, Laptop, Briefcase } from 'lucide-react';
import * as S from './styles';

const services = [
  {
    icon: <BookOpen size={32} />,
    title: 'Educational Consultancy',
    description: 'Professional guidance for schools, parents, and students in academic achievement, curriculum, and career development.'
  },
  {
    icon: <Users size={32} />,
    title: 'Tutorial Services',
    description: 'Academic support in Mathematics, Language Arts, and preparation for WAEC, JAMB, and NECO examinations.'
  },
  {
    icon: <PenTool size={32} />,
    title: 'Graphics Design',
    description: 'Creative solutions including logo design, brochures, posters, banners, and personalized branding solutions.'
  },
  {
    icon: <Globe size={32} />,
    title: 'Web Design',
    description: 'Building responsive websites for schools, businesses, and creative projects, including e-commerce platforms.'
  },
  {
    icon: <Laptop size={32} />,
    title: 'Training & Development',
    description: 'Hands-on workshops in graphic design, web development, public speaking, and entrepreneurship.'
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Freelancing Services',
    description: 'Remote graphic design, document editing, virtual tutoring, and consultancy services.'
  }
];

export const Services = () => {
  return (
    <S.ServicesSection id="services">
      <S.Container>
        <S.SectionTitle>Our Services</S.SectionTitle>
        <S.ServicesGrid>
          {services.map((service, index) => (
            <S.ServiceCard key={index}>
              <S.IconWrapper>{service.icon}</S.IconWrapper>
              <S.ServiceTitle>{service.title}</S.ServiceTitle>
              <S.ServiceDescription>{service.description}</S.ServiceDescription>
            </S.ServiceCard>
          ))}
        </S.ServicesGrid>
      </S.Container>
    </S.ServicesSection>
  );
};