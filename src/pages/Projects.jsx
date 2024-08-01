import React, {useEffect} from 'react';
import ProjectCard from '../assets/ProjectCard'; 
import gsap from 'gsap';


const Projects = () => {
  useEffect(() => {
    gsap.fromTo(
      '.container',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2 }
    );
  }, []);
  return (
    <div
    className="container min-h-screen max-w-3xl mx-auto  max-h-fit p-4 sm:p-6 md:p-8 rounded border-2 border-primary text-primary bg-primary opacity-100"
    >
    <ProjectCard
        imageSrc="homehelper.png"
        tags={['Nextjs', 'TailwindCSS']}
        title="homehelper ai"
        description="Homehelper AI is a freelance project where I served as a developer. This project was built using Next.js and Tailwind CSS, based on a provided Figma design. I was responsible for developing the frontend of the website. I collaborated closely with the backend team and the designer to ensure the client's requirements were met successfully."
        clickUrl="https://homehelper.ai/"
      />
    <ProjectCard
        imageSrc="dialogai.png"
        tags={['ReactJS', 'TailwindCSS']}
        title="dialog ai"
        description="Dialog AI is a freelance project developed using ReactJS and TailwindCSS. I served as a frontend developer, successfully implementing the client's design. This was my first freelance project. Despite initial challenges due to my unfamiliarity with React, I quickly adapted to meet the client's needs."
        clickUrl="https://www.dialogai.io/"
      />
        <ProjectCard
            imageSrc="portfolio.png"
            tags={['Nextjs', 'TailwindCSS', 'Three.js']}
            title="portfolio(prev)"
            description="Sahil Dev is my personal portfolio page, built using Nextjs and TailwindCSS. My portfolio provides a user-freindly and responsive interface where I implemented a clean, modern design to highlight my work. I have also integrated animations using Three.js, enhancing the site's interactivity." 
            clickUrl="https://portfolio-sahilrw.vercel.app/"
          />
    <ProjectCard
        imageSrc="prev-plex.png"
        tags={['ReactJS', 'TailwindCSS']}
        title="preview plex"
        description="Preview Plex is a dynamic movie app showcasing categorized movies fetched from the MovieDB API, featuring MovieList and details pages for easy browsing."
        clickUrl="https://preview-plex.vercel.app/"
      />
    <ProjectCard
        imageSrc="chess.png"
        tags={['Python', 'Pygame']}
        title="chess game"
        description="Developed a fully functional chess game using Python and the Pygame library. In this project, I implemented standard chess rules, including legal moves, check, and checkmate. Utilized Pygame for rendering the board and pieces, ensuring smooth animations. This project provides and engaging and realistic chess-playing experience, showcasing my skills and interests in Python and game development."
        clickUrl="https://github.com/sahilrw/chess-engine"
      />
    <ProjectCard
        imageSrc="weather.png"
        tags={["ReactJS"]}
        title="weather"
        description="Developed a React-based application to check weather conditions easily and efficiently. This web application displays key weather information, including temperature, humidity, wind speed, etc. Fetches real-time weather data using a reliable web API."
        clickUrl="https://weather-app-theta-lime.vercel.app/"
      />
    </div>
  );
};

export default Projects;

