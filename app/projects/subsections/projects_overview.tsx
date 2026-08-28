'use client'
import React from 'react'
import ProjectChoice from '../components/project_choice_card';
import { Project } from '../components/project_props';

export const ProjectsOverview = ({project_list, onClick} : {project_list: Project[], onClick : (project: Project) => void}) => {
  return (
    <div className="p-5 flex flex-wrap justify-center gap-5 md:place-items-center md:grid md:grid-cols-2 w-full">
      {project_list.map(project => <ProjectChoice key={project.name} project={project} onClick={project => onClick(project)}/>)}
    </div>
  )
}

export default ProjectsOverview
