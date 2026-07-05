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
        imageSrc="repo-assistant.png"
        tags={['Python', 'FastAPI', 'RAG', 'Claude', 'Chroma']}
        title="repo-assistant"
        description="Grounded Q&A over any public GitHub repo, with citations to the exact files and line ranges. Semantic + reranked retrieval, streaming answers, injection-aware. I measured recall@3 and cut hybrid search when the data showed it hurt."
        liveUrl="https://sahilrw-repo-assistant.hf.space"
        githubUrl="https://github.com/sahilrw/repo-assistant"
      />
    <ProjectCard
        imageSrc="research-agent.png"
        tags={['Python', 'LLM Agents', 'Evaluation', 'Claude', 'Tavily']}
        title="research-agent"
        description="An autonomous web research agent: decomposes a question, scores sources, extracts cited claims, deepens on weak findings, and writes a fully-cited report. Ablations isolated iterative deepening as the driver of a 75% to 96% jump in correct-claim coverage."
        githubUrl="https://github.com/sahilrw/research-agent"
        blogUrl="https://medium.com/@sahilrw000/building-a-research-agent-taught-me-why-ablations-matter-591d14bca245"
      />
    <ProjectCard
        imageSrc="posting-analyzer.png"
        tags={['Python', 'NLP', 'Streamlit', 'scikit-learn']}
        title="posting-analyzer"
        description="Extracts role, seniority, skills, and experience from raw job descriptions using rule-based NLP (regex + curated keyword dictionaries). No LLM, runs locally in under 50ms. Built with Streamlit."
        liveUrl="https://posting-analyzer.streamlit.app"
        githubUrl="https://github.com/sahilrw/posting-analyzer"
      />
    <ProjectCard
        imageSrc="chess.png"
        tags={['Python', 'Pygame']}
        title="chess game"
        description="A fully functional chess game built with Python and the Pygame library. I implemented the standard chess rules including legal moves, check, and checkmate, and used Pygame to render the board and pieces with smooth animations, for an engaging and realistic playing experience."
        githubUrl="https://github.com/sahilrw/chess-engine"
      />
    <ProjectCard
        imageSrc="portfolio.png"
        tags={['Nextjs', 'TailwindCSS', 'Three.js']}
        title="portfolio(prev)"
        description="Sahil Dev is my previous personal portfolio, built with Next.js and TailwindCSS. It has a clean, responsive, modern interface to highlight my work, with Three.js animations woven in to make the site more interactive and alive."
        liveUrl="https://portfolio-sahilrw.vercel.app/"
      />
    <ProjectCard
        imageSrc="prev-plex.png"
        tags={['ReactJS', 'TailwindCSS']}
        title="preview plex"
        description="Preview Plex is a dynamic movie app that pulls categorized titles from the MovieDB API. It features a browsable movie list and a detailed page for each title, built with React and TailwindCSS for a fast, responsive browsing experience."
        liveUrl="https://preview-plex.vercel.app/"
      />
    <ProjectCard
        imageSrc="homehelper.png"
        tags={['Nextjs', 'TailwindCSS']}
        title="homehelper ai"
        description="Homehelper AI is a freelance project where I built the frontend with Next.js and TailwindCSS from a provided Figma design, collaborating closely with the backend team and the designer to ship the client's requirements successfully."
        liveUrl="https://homehelper.ai/"
      />
    </div>
  );
};

export default Projects;
