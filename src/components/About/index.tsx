import React from 'react';
import { AboutHero } from './components/AboutHero';
import { Story } from './components/Story';
import { Team } from './components/Team';

export const About = () => {
  return (
    <section id="about">
      <AboutHero />
      <Story />
      <Team />
    </section>
  );
};