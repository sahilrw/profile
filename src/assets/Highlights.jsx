import React from 'react';

const stats = [
  { value: '80%', label: 'recall@3 · repo-assistant retrieval' },
  { value: '75 → 96%', label: 'claim coverage gained from ablations' },
  { value: '5', label: 'variants benchmarked · LLM-as-judge' },
];

const Highlights = () => (
  <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 text-primary'>
    {stats.map((s, i) => (
      <div key={i} className='border border-primary rounded p-4 text-center sm:text-left'>
        <div className='text-2xl md:text-3xl font-bold text-accent'>{s.value}</div>
        <div className='text-xs opacity-70 mt-1'>{s.label}</div>
      </div>
    ))}
  </div>
);

export default Highlights;
