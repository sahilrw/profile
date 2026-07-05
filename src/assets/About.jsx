import React from 'react'
import { useTheme } from './ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className='text-xs sm:text-base md:text-lg'>
      <div className='fade-in fade-in-2'>
        <span className='text-lg md:text-2xl font-semibold md:font-bold'><span className='text-accent'>&gt;</span> ABOUT</span><br />
        <span className='text-base md:text-xl italic'>Hi, I'm Sahil</span><br />
        <div className='grid gap-2 h-fit'>
          <p>
            I'm an AI/ML engineer. I build LLM systems, RAG pipelines, and agents in Python, and I care as much about measuring them as building them. I run ablations and benchmarks to find what actually works, and I document what I learn along the way.
          </p>
          <p>
            I'm currently a full-stack engineering intern at a startup, where over the past year I helped build and ship a cross-platform retail-audit app across iOS, Android, and web, and wrote end-to-end test suites wired into CI. With my freelance frontend work (React, TailwindCSS, JavaScript) on top of that, I can ship real end-to-end products, not just notebooks.
          </p>
        </div>
        <hr className={`border-t-2 my-6 ${
          isDarkMode ? 'border-white' : 'border-black'
        }`}/>
      </div>
      <div>
      <span className='text-lg md:text-2xl font-semibold md:font-bold'><span className='text-accent'>&gt;</span> WHAT I WORK ON</span><br />
        <ul className='grid gap-2 h-fit list-none pl-3 sm:pl-5 mt-2'>
          <li className='flex gap-2'><span className='text-accent shrink-0'>&ndash;</span><span>LLM systems, RAG pipelines, and agents in Python</span></li>
          <li className='flex gap-2'><span className='text-accent shrink-0'>&ndash;</span><span>Rigorous evaluation: ablations and benchmarks to measure what actually helps</span></li>
          <li className='flex gap-2'><span className='text-accent shrink-0'>&ndash;</span><span>Shipping end-to-end, from retrieval and prompts to a working UI</span></li>
          <li className='flex gap-2'><span className='text-accent shrink-0'>&ndash;</span><span>Reading research and turning it into working code</span></li>
        </ul>
      </div>
    </div>
  )
}

export default About
