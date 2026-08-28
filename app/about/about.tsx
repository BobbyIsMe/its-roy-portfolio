import React from 'react'
import WhoIsRoy from './subsections/who_is_roy';
import RoyMeaning from './subsections/roy_meaning';
import Certificates from './subsections/certificates';
import TechStacks from './subsections/tech_stacks';
import Section from '../components/section';

const clamp: string = "px-[clamp(1rem,8vw,10rem)]";

const About = () => {
    return (
        <Section header="ABOUT" background="about_bg.webp">
            <WhoIsRoy />
                <RoyMeaning />
                <Certificates />
                <TechStacks />
        </Section>
    )
}

export default About
