'use client'
import React from 'react'
import { Project, ProjectDetail, ProjectTabDetail } from './project_props';
import styles from '../projects.module.css';
import Image from 'next/image';
import { Constants } from '@/app/constants';
import StackCard from '@/app/components/stack_card';

const ButtonDetail = ({ projectTabDetail, onChangeTab }: { projectTabDetail: ProjectTabDetail, onChangeTab: (projectTabDetail: ProjectTabDetail) => void }) => {
    return (
        <button className={`${styles.button} w-full`} onClick={() => onChangeTab(projectTabDetail)}>{projectTabDetail.tab}</button>
    )
}

export const ProjectNavigationCard = ({ project, onExit, onChangeTab }: { project: Project, onExit: () => void, onChangeTab: (projectTabDetail: ProjectTabDetail) => void }) => {
    return (
        <StackCard>
            <div className="grid items-start w-full lg:w-100 grid-cols-[auto_1fr]">
                <button className={styles.button} onClick={onExit}>
                    {"<-"}
                </button>
                <div className="pt-5 flex flex-col w-full">
                    {project.name}
                    <ButtonDetail projectTabDetail={{ tab: "Description", path: Constants.DESC_PATH, projectDetail: project.description }} onChangeTab={onChangeTab} />
                    <div className={styles.button}>
                        Features
                    </div>
                    <div className="pl-5 flex">
                        {project.features.map(feature => <ButtonDetail key={feature.label} projectTabDetail={{ tab: feature.label, path: Constants.FEATURE_PATH, projectDetail: feature.detail }} onChangeTab={onChangeTab} />)}
                    </div>
                    <ButtonDetail projectTabDetail={{ tab: "Tech Used", path: Constants.TECH_USED_PATH, projectDetail: project.tech_used }} onChangeTab={onChangeTab} />
                    <ButtonDetail projectTabDetail={{ tab: "Source Code", path: Constants.SOURCE_CODE_PATH, projectDetail: project.source_code }} onChangeTab={onChangeTab} />
                </div>
            </div>
        </StackCard>
    )
}


export const ProjectDetailsCard = ({ projectTabDetail }: { projectTabDetail: ProjectTabDetail }) => {
    const detail: ProjectDetail = projectTabDetail.projectDetail;
    return (
        <div className="max-w-200 flex flex-col gap-5 h-200 md:h-150">
            {projectTabDetail.tab}
            <Image src={`${projectTabDetail.path}${detail.image}`} alt={projectTabDetail.tab} width="128" height="128" />
            <div className="overflow-y-auto text-start">
                {detail.description}
            </div>
        </div>
    )
}
