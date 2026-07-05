import React from 'react';
import { NavLink } from 'react-router-dom';
import {useTheme} from '../assets/ThemeContext';


const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const navClass = ({ isActive }) =>
  `transition-colors ${isActive ? 'text-accent' : 'hover:text-accent'}`;


const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="max-w-3xl mx-auto my-3 py-3 rounded border-2 border-primary bg-primary text-primary
                        flex justify-between items-center">

      <div className="text-lg sm:text-xl font-normal sm:font-medium flex">
        <span className='px-2 sm:px-4'>
          <NavLink to="/" end className={navClass}>Home</NavLink>
        </span>
        <span className='px-2 sm:px-4'>
          <NavLink to="/projects" className={navClass}>Projects</NavLink>
        </span>
        <span className='px-2 sm:px-4'>
          <NavLink to="/writing" className={navClass}>Writing</NavLink>
        </span>
      </div>
      <button
        onClick={toggleTheme}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        className={`flex items-center justify-center p-2 mx-2 sm:mx-4 border rounded ${
          isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
        } transition-colors duration-150 hover:scale-105`}
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </header>
  );
};

export default Header;
