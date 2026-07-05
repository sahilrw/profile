import React, {useEffect} from 'react'
import gsap from 'gsap';
import { useTheme } from '../assets/ThemeContext';

const posts = [
  {
    title: 'Building a Research Agent Taught Me Why Ablations Matter',
    publisher: 'Medium',
    date: 'Jun 2026',
    description:
      "A deep dive into designing and evaluating an autonomous research agent: benchmark construction, an LLM-as-judge rubric, and ablation studies across five variants. Includes an honest negative result — credibility weighting didn't measurably help — because the ablations are the point.",
    url: 'https://medium.com/@sahilrw000/building-a-research-agent-taught-me-why-ablations-matter-591d14bca245',
  },
];

const Blogs = () => {
  const { isDarkMode } = useTheme();
  useEffect(() => {
    gsap.fromTo(
      '.container',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2 }
    );
  }, []);

  const openUrl = (url) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <div
      className="container min-h-screen max-w-3xl mx-auto max-h-fit p-4 sm:p-6 md:p-8 rounded border-2 border-primary text-primary bg-primary opacity-100"
    >
      <span className='text-lg md:text-2xl font-semibold md:font-bold'>WRITING</span>
      <div className='flex flex-col gap-6 mt-4'>
        {posts.map((post, i) => (
          <div key={i} className='flex flex-col gap-3'>
            <div className='text-sm opacity-70'>{post.publisher} · {post.date}</div>
            <span className='text-lg md:text-xl font-medium'>{post.title}</span>
            <p>{post.description}</p>
            <div className='py-1'>
              <button
                onClick={() => openUrl(post.url)}
                className={`p-2 rounded hover:scale-110 transition-all duration-200 ${
                  isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
                }`}
              >
                Read on Medium
              </button>
            </div>
            <hr className={`border-t-2 mt-2 ${isDarkMode ? 'border-white' : 'border-black'}`} />
          </div>
        ))}
        <p className='text-sm opacity-60'>More to come.</p>
      </div>
    </div>
  )
}

export default Blogs
