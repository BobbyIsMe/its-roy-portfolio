import React from 'react'
import ProjectSubsection from './subsections/project_subsection';
import Section from '../components/section';

const px_clamp: string = "px-[clamp(1rem,8vw,10rem)]";

const Projects = () => {
  return (
    <Section header="Projects" background="projects_bg.webp">
      
        <ProjectSubsection />
    </Section>
  )
}

export default Projects
