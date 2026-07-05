import React from 'react';
import {useTheme} from '../assets/ThemeContext';


const ProjectCard = ({ imageSrc, tags, title, description, stat, liveUrl, githubUrl, blogUrl, liveLabel = 'Live Demo' }) => {
  const { isDarkMode } = useTheme();
  const openUrl = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const btnBase = 'px-3 py-1.5 text-sm rounded hover:scale-105 transition-all duration-200';
  const neutralBtn = `${btnBase} ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`;
  const accentBtn = `${btnBase} bg-accent text-white`;

  return (
    <div className='flex flex-col w-full mb-6 gap-3 text-primary'>
      <div className='flex flex-col items-center sm:flex-row sm:items-stretch gap-4'>
        <div className='w-full sm:w-64 shrink-0 h-44 sm:h-auto'>
          <img
            className='w-full h-full object-cover object-top rounded border-2 border-primary'
            src={imageSrc}
            alt={title}
          />
        </div>

        {/* everything text-side lives in one aligned column */}
        <div className='flex flex-col gap-3 flex-1'>
          <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
            <span className='text-base md:text-lg font-medium'>{title.toUpperCase()}</span>
            {stat && <span className='text-accent font-semibold text-sm'>{stat}</span>}
          </div>
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
              <button onClick={() => openUrl(liveUrl)} className={accentBtn}>{liveLabel}</button>
            )}
            {githubUrl && (
              <button onClick={() => openUrl(githubUrl)} className={neutralBtn}>GitHub</button>
            )}
            {blogUrl && (
              <button onClick={() => openUrl(blogUrl)} className={neutralBtn}>Blog</button>
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
