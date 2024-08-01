import React, { useEffect } from 'react';
import gsap from 'gsap';
import Intro from '../assets/Intro';
import About from '../assets/About';

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
      <About />
    </div>
  );
};

export default LandingPage;
