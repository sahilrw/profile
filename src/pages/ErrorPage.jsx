import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container min-h-screen max-w-3xl mx-auto max-h-fit p-4 sm:p-6 md:p-8 rounded border-2 border-primary text-primary bg-primary flex flex-col items-center justify-center gap-4 text-center">
      <div className='text-6xl md:text-7xl font-bold'><span className='text-accent'>4</span>0<span className='text-accent'>4</span></div>
      <p className='opacity-80'>This page doesn&apos;t exist.</p>
      <Link to="/" className='underline hover:text-accent transition-colors'>&larr; Back home</Link>
    </div>
  );
};

export default ErrorPage;
