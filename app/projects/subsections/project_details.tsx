'use client'
import React, { useState } from 'react'
import { ProjectDetailsCard, ProjectNavigationCard } from '../components/project_details_card';
import { Project, ProjectTabDetail } from '../components/project_props';
import { Constants } from '@/app/constants';

const ProjectDetails = ({project, onExit} : {project : Project, onExit : () => void}) => {

    const desc : ProjectTabDetail = {tab: "Description", path: Constants.DESC_PATH, projectDetail: project.description};
    const [currentProjectTabDetail, setProjectTabDetail] = useState(desc);

  return (
    <div className="p-5 flex flex-wrap justify-between">
        <ProjectNavigationCard project={project} onExit={onExit} onChangeTab={setProjectTabDetail}/>
        <ProjectDetailsCard projectTabDetail={currentProjectTabDetail}/>
    </div>
  )
}

export default ProjectDetails
