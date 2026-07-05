import React from 'react';
import {useTheme} from '../assets/ThemeContext';


const ProjectCard = ({ imageSrc, tags, title, description, liveUrl, githubUrl, blogUrl, liveLabel = 'Live Demo' }) => {
  const { isDarkMode } = useTheme();
  const openUrl = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const btnClass = `px-3 py-1.5 text-sm rounded hover:scale-105 transition-all duration-200 ${
    isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
  }`;

  return (
    <div className='flex flex-col w-full mb-6 gap-3 text-primary'>
      <div className='flex flex-col sm:flex-row gap-4 sm:items-stretch'>
        <div className='w-full sm:w-64 shrink-0 h-48 sm:h-auto'>
          <img
            className='w-full h-full object-cover object-top rounded border-2 border-primary'
            src={imageSrc}
            alt={title}
          />
        </div>

        {/* everything text-side lives in one aligned column */}
        <div className='flex flex-col gap-3 flex-1'>
          <span className='text-base md:text-lg font-medium'>{title.toUpperCase()}</span>
          <p className='text-xs sm:text-sm leading-relaxed'>{description}</p>

          {/* tech stack pills */}
          <div className='flex flex-wrap gap-1.5'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='text-xs px-2 py-0.5 rounded border border-primary opacity-80'
              >
                {tag}
              </span>
            ))}
          </div>

          {/* links */}
          <div className='flex flex-wrap gap-2 mt-1'>
            {liveUrl && (
              <button onClick={() => openUrl(liveUrl)} className={btnClass}>{liveLabel}</button>
            )}
            {githubUrl && (
              <button onClick={() => openUrl(githubUrl)} className={btnClass}>GitHub</button>
            )}
            {blogUrl && (
              <button onClick={() => openUrl(blogUrl)} className={btnClass}>Blog</button>
            )}
          </div>
        </div>
      </div>

      <hr className={`border-t-2 mt-1 ${
          isDarkMode ? 'border-white' : 'border-black'
        }`}/>
    </div>
  );
};

export default ProjectCard;
