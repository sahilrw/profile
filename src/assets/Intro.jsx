import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';


const Intro = () => {
    const { isDarkMode} = useTheme();
    const imgRef = useRef(null);

  
    useEffect(() => {
      const handleMouseMove = (event) => {
        if (imgRef.current) {
          const { clientX: mouseX, clientY: mouseY } = event;
          const { left, top, width, height } = imgRef.current.getBoundingClientRect();
          const centerX = left + width / 2;
          const centerY = top + height / 2;
          const sensitivity = 5; 
          const rotateX = Math.min(15, Math.max(-15, ((mouseY - centerY) / height) * sensitivity * 50));
          const rotateY = Math.min(15, Math.max(-15, ((mouseX - centerX) / width) * sensitivity * -50));
  
          imgRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
        <div className='bg-primary fade-in'>
          <div className='flex justify-between gap-20 image-3d'>
            <img
              src="pfp.jpeg"
              className='border-2 border-primary w-40 sm:w-48 md:w-72 transition-transform duration-300' // Added transition for smooth effect
              alt="pfp"
              ref={imgRef}
            />
            {/* Text */}
            <div className='text-primary absolute bottom-4 right-4 text-right bounce'>
              <span className='text-xl sm:text-2xl md:text-3xl fade-in fade-in-2'>SAHIL R</span><br />
              <span className='text-sm md:text-lg fade-in fade-in-1'>WEB DEV</span><br />
            </div>
          </div>
          <hr className={`border-t-2 my-6 ${
            isDarkMode ? 'border-white' : 'border-black'
          }`}/>
      </div>
    );
  };

export default Intro
