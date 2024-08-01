import React from 'react';
import { Link } from 'react-router-dom';
import {useTheme} from '../assets/ThemeContext';


const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="max-w-3xl mx-auto my-3 py-3 rounded border-2 border-primary bg-primary text-primary
                        flex justify-between items-center">

      <div className="text-lg sm:text-xl font-normal sm:font-medium flex">
        <span className='px-2 sm:px-4'>
          <Link to="/">Home</Link>
        </span>
        <span className='px-2 sm:px-4'>
          <Link to="/projects">Projects</Link>
        </span>
        <span className='px-2 sm:px-4'>
          <Link to="/blogs">Blogs</Link>
        </span>
      </div>
      <button
        onClick={toggleTheme}
        className={`px-2 sm:px-4 py-1 sm:py-2 mx-2 sm:mx-4 border rounded ${
          isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
        } transition-colors duration-300`}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
