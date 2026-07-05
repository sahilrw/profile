import React from 'react';

const groups = [
  { title: 'LLMs & Agents', items: ['Claude API', 'RAG', 'LLM agents', 'prompt-injection defense'] },
  { title: 'Retrieval', items: ['embeddings', 'Chroma', 'cross-encoder reranking', 'BM25', 'semantic search'] },
  { title: 'Evaluation', items: ['ablations', 'benchmarks', 'LLM-as-judge', 'recall@k'] },
  { title: 'ML / Data', items: ['Python', 'PyTorch', 'scikit-learn', 'NumPy', 'pandas'] },
  { title: 'Web / Infra', items: ['FastAPI', 'React', 'JavaScript', 'TailwindCSS', 'Streamlit'] },
];

const Skills = () => (
  <div className='text-primary'>
    <hr className='border-t-2 border-primary my-6' />
    <span className='text-lg md:text-2xl font-semibold md:font-bold'>
      <span className='text-accent'>&gt;</span> SKILLS
    </span>
    <div className='grid gap-4 mt-4'>
      {groups.map((g, i) => (
        <div key={i}>
          <div className='text-sm font-semibold opacity-70 mb-2'>{g.title}</div>
          <div className='flex flex-wrap gap-1.5'>
            {g.items.map((item, j) => (
              <span key={j} className='text-xs px-2 py-0.5 rounded border border-primary opacity-80'>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
