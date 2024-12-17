import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;