'use client'
import React, { useState } from 'react'
import { Project } from '../components/project_props';
import { ProjectsOverview } from '../subsections/projects_overview';
import ProjectDetails from './project_details';
import Subsection from '@/app/components/subsection';
import projects from '@/data/projects.json';

const cerina_store: Project = {
  logo: "cerina_store.webp",
  name: "Cerina's Sari-Sari Store",
  info: "Item Reservation and Management System",
  description: {
    image: "cerina_store_desc.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  features: [
    {
      label: "Feature 1",
      detail: {
        image: "cerina_store_1.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    }
  ],
  tech_used: {
    image: "cerina_store_tech_used.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  source_code: {
    image: "cerina_store_source_code.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
};

const project_list: Project[] = projects.featured;

const ProjectSubsection = () => {

  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  return (
    <Subsection header="FEATURED">
      <div className={`min-h-300 md:min-h-200 ${!currentProject && `flex justify-center`}`}>
        {
          currentProject ? <ProjectDetails project={currentProject} onExit={() => setCurrentProject(null)} /> : <ProjectsOverview project_list={project_list} onClick={setCurrentProject} />
        }
      </div>
    </Subsection>
  )
}

export default ProjectSubsection
