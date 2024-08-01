import React from 'react';
import {useTheme} from '../assets/ThemeContext';


const ProjectCard = ({ imageSrc, tags, title, description, clickUrl }) => {
  const { isDarkMode } = useTheme();
  const handleClick = (clickUrl) => {
    window.open(clickUrl, '_blank');
  };


  return (
    <div className={`flex flex-col w-full mb-2 p-2 gap-6`}>
      <img className='w-80 h-72 mx-auto' src={imageSrc} alt="Project" />
      <div className='flex flex-col gap-y-4'>
        <div className='mx-2 h-fit text-primary'>
          <span className='text-lg font-medium'>{`${title.toUpperCase()}`}</span>
        <div>Tech Stack used: 
          {tags.map((tag, index) => (
            <span key={index} className={`px-2 text-primary`}>{tag}</span>
          ))}
        </div>
          <p>{description}</p>
        </div>
        <div className='py-2'>
          <button onClick={() => handleClick(clickUrl)} className={`p-2 rounded mx-2 hover:scale-110 transition-all duration-200 ${
                isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
          }`}>View Project</button>
        </div>
      </div>

      <hr className={`border-t-2 ${
          isDarkMode ? 'border-white' : 'border-black'
        }`}/>
    </div>
  );
};

export default ProjectCard;