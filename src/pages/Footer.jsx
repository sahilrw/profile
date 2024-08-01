import React from 'react'

const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto my-3 py-1 sm:py-3 rounded border-2 border-primary bg-primary text-primary">
    <div className="text-lg sm:text-xl font-normal sm:font-medium flex justify-between">  
      <span className='px-4'>
        <a href="https://www.x.com/_sahil_r/"
          target="_blank"
          rel="noopener noreferrer">Twitter
        </a>
      </span>
      <span className='px-4'>
        <a href="https://www.linkedin.com/in/sahilrw/"
          target="_blank"
          rel="noopener noreferrer">LinkedIn
        </a>
      </span>
      <span className='px-4'>
        <a href="https://www.github.com/sahilrw/"
          target="_blank"
          rel="noopener noreferrer">Github
        </a>
      </span>
      <span className="px-4">
        <a href="mailto:sahilrw05@gmail.com" 
            target="_blank"
            rel="noopener noreferrer">Email
        </a>
      </span>
    </div>
  </footer>
  )
}

export default Footer
