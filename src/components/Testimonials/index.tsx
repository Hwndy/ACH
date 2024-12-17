import React from 'react';
import * as S from './styles';

const testimonials = [
  {
    quote: "ACH's strategic guidance transformed our business operations and helped us achieve unprecedented growth.",
    author: "Sarah Johnson",
    title: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Working with ACH was a game-changer for our company. Their expertise in risk management is unparalleled.",
    author: "Michael Chen",
    title: "COO, InnovateCo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The team at ACH provided invaluable insights that helped us navigate complex market challenges.",
    author: "Emma Davis",
    title: "Director, GlobalTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

export const Testimonials = () => {
  return (
    <S.TestimonialsSection id="testimonials">
      <S.Container>
        <S.SectionTitle>What Our Clients Say</S.SectionTitle>
        <S.TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <S.TestimonialCard key={index}>
              <S.Quote>{testimonial.quote}</S.Quote>
              <S.Author>
                <S.AuthorImage src={testimonial.image} alt={testimonial.author} />
                <S.AuthorInfo>
                  <S.AuthorName>{testimonial.author}</S.AuthorName>
                  <S.AuthorTitle>{testimonial.title}</S.AuthorTitle>
                </S.AuthorInfo>
              </S.Author>
            </S.TestimonialCard>
          ))}
        </S.TestimonialsGrid>
      </S.Container>
    </S.TestimonialsSection>
  );
};