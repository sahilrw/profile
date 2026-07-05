import React, { useEffect } from 'react';
import gsap from 'gsap';
import Intro from '../assets/Intro';
import Highlights from '../assets/Highlights';
import About from '../assets/About';
import Skills from '../assets/Skills';

const LandingPage = () => {
  useEffect(() => {
    gsap.fromTo(
      '.container',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2 }
    );
  }, []);

  return (
    <div className="container min-h-fit max-w-3xl mx-auto max-h-fit p-4 sm:p-6 md:p-8 rounded border-2 border-primary text-primary bg-primary">
      <Intro />
      <Highlights />
      <About />
      <Skills />
    </div>
  );
};

export default LandingPage;
