import React from 'react'
import Home from './home/home';
import About from './about/about';
import Projects from './projects/projects';
import Contact from './contact/contact';

const R = () => {
  return (
    <div className="flex flex-col justify-center place-items-center">
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default R
