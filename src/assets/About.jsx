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
            I'm a web dev. Besides my expertise in React and TailwindCSS, I have a strong foundation in HTML, CSS, and JavaScript. I have leveraged these technical skills to work on freelance projects, where I have acquired the ability to excel in a team environment. 
          </p>
          <p>
            Now, I am delving into the field of AIML. I have built several projects using Python. Additionally, I have learned to train basic models, based on the knowledge I have gained so far.
          </p>
          <p>
            For a large part of the day, I am engrossed in learning and building cool stuff on my computer. Apart from that, I spend lot of time playing chess, which helps me maintain a cool mind in tense situations and think strategically. Feel free to challenge me to a match via 
              <a href="https://x.com/_sahil_r" className='underline mx-2.5'>X(Twitter)</a>
          dms.
          </p>
        </div>
        <hr className={`border-t-2 my-6 ${
          isDarkMode ? 'border-white' : 'border-black'
        }`}/>
      </div>
      <div>
      <span className='text-lg md:text-2xl font-semibold md:font-bold'>WHAT I PLAN TO DO</span><br />
        <div className='grid gap-2 h-fit'>
          <li>study ML in depth</li>   
          <li>build cool projects</li>
          <li>read research papers</li>   
          <li>document my progress</li> 
        </div>
      </div>
    </div>
  )
}

export default About
