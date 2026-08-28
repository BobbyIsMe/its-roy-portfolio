import React from 'react'
import TechStackCard, { TechStack, TechStackSection } from '../components/tech_stack_card'
import Subsection from '@/app/components/subsection';
import { Constants } from '@/app/constants';

//Frontend Tech Stacks
const react = { icon: `${Constants.FRONTEND_PATH}react.svg`, name: "React" };
const nextjs = { icon: `${Constants.FRONTEND_PATH}nextjs.svg`, name: "Next.js" };
const flutter = { icon: `${Constants.FRONTEND_PATH}flutter.svg`, name: "Flutter" };
const javascript = { icon: `${Constants.FRONTEND_PATH}javascript.svg`, name: "JavaScript" };
const tailwind = { icon: `${Constants.FRONTEND_PATH}tailwind.svg`, name: "Tailwind CSS" };

const frontendTS: TechStack[] = [
  react, nextjs, flutter, javascript, tailwind
];

const frontend: TechStackSection = {
  header: "FRONTEND TECHNOLOGIES",
  techStacks: frontendTS
};

//Backend Tech Stacks
const nestjs = { icon: "/backend/nestjs.svg", name: "NestJS" };
const postgresql = { icon: "/backend/postgresql.svg", name: "PostgreSQL" };
const springboot = { icon: "/backend/springboot.svg", name: "SpringBoot" };
const mysql = { icon: "/backend/mysql.svg", name: "MySQL" };

const backendTS: TechStack[] = [
  nestjs, postgresql, springboot, mysql
];

const backend: TechStackSection = {
  header: "BACKEND TECHNOLOGIES",
  techStacks: backendTS
};

//Programming Languages Tech Stacks
const c = { icon: "/prog_lang/nestjs.svg", name: "NestJS" };
const cs = { icon: "/backend/postgresql.svg", name: "PostgreSQL" };
const java = { icon: "/backend/springboot.svg", name: "SpringBoot" };
const php = { icon: "/backend/mysql.svg", name: "MySQL" };
const dart = { icon: "/backend/mysql.svg", name: "MySQL" };

const progLangTS: TechStack[] = [
  c, cs, java, php, dart
];

const progLang: TechStackSection = {
  header: "PROGRAMMING LANGUAGES",
  techStacks: progLangTS
};

const techStackSectList: TechStackSection[] = [
  frontend, backend, progLang
];




const TechStacks = () => {
  return (
    <Subsection header="Tech Stacks" threshold={0.5}>
        <div className="grid grid-cols-1 gap-10 py-2 px-[clamp(0.2rem,1vw,1.5rem)] sm:grid-cols-2">
          {techStackSectList.map((techStackSect) => (
            <TechStackCard
              key={techStackSect.header}
              techStackSect={techStackSect}
            />
          ))}
        </div>
    </Subsection>
  )
}

export default TechStacks
