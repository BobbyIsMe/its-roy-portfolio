import React from 'react'
import ProjectSubsection from './subsections/project_subsection';
import Section from '../components/section';

const px_clamp: string = "px-[clamp(1rem,8vw,10rem)]";

const Projects = () => {
  return (
    <Section header="Projects" background="projects_bg.webp" credit="TheOldRelic" href="https://www.facebook.com/groups/3696398070485713/posts/23897549043277318/">
      
        <ProjectSubsection />
    </Section>
  )
}

export default Projects
