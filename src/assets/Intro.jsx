import React from 'react';
import { useTheme } from './ThemeContext';


const Intro = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className='bg-primary fade-in'>
          <div className='flex flex-col items-center sm:flex-row sm:items-start gap-8 sm:gap-10'>
            <img
              src="pfp.jpeg"
              className='border-2 border-primary w-40 sm:w-44 md:w-52 shrink-0'
              alt="pfp"
            />

            {/* name + title + links */}
            <div className='flex flex-col gap-4 text-primary text-center sm:text-left'>
              <div>
                <div className='text-3xl sm:text-4xl md:text-5xl fade-in fade-in-2'>SAHIL R</div>
                <div className='text-base md:text-lg mt-1 opacity-80 fade-in fade-in-1'>AI/ML ENGINEER</div>
              </div>

              <div className='flex justify-center sm:justify-start'>
                <div className={`inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold ${
                  isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
                }`}>
                  <span className='w-2.5 h-2.5 rounded-full bg-green-500 inline-block animate-pulse'></span>
                  <span>Open to AI/ML roles</span>
                </div>
              </div>

              <div className='flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-1 text-sm md:text-base'>
                <a href="https://github.com/sahilrw" target="_blank" rel="noopener noreferrer" className='underline hover:opacity-70'>GitHub</a>
                <a href="https://x.com/_sahil_r" target="_blank" rel="noopener noreferrer" className='underline hover:opacity-70'>X</a>
                <a href="https://linkedin.com/in/sahilrw" target="_blank" rel="noopener noreferrer" className='underline hover:opacity-70'>LinkedIn</a>
                <a href="mailto:sahilrw000@gmail.com" className='underline hover:opacity-70'>Email</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className='underline hover:opacity-70'>Resume</a>
              </div>
            </div>
          </div>

          <hr className={`border-t-2 my-6 ${
            isDarkMode ? 'border-white' : 'border-black'
          }`}/>
      </div>
    );
  };

export default Intro
