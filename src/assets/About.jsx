import React from 'react'
import { useTheme } from './ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className='text-xs sm:text-base md:text-lg'>
      <div className='fade-in fade-in-2'>
        <span className='text-lg md:text-2xl font-semibold md:font-bold'>ABOUT</span><br />
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
      <span className='text-lg md:text-2xl font-semibold md:font-bold'>WHAT I WORK ON</span><br />
        <div className='grid gap-2 h-fit'>
          <li>LLM systems, RAG pipelines, and agents in Python</li>
          <li>Rigorous evaluation: ablations and benchmarks to measure what actually helps</li>
          <li>Shipping end-to-end, from retrieval and prompts to a working UI</li>
          <li>Reading research and turning it into working code</li>
        </div>
      </div>
    </div>
  )
}

export default About
