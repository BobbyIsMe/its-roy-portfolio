import React from 'react'
import WhoIsRoy from './subsections/who_is_roy';
import RoyMeaning from './subsections/roy_meaning';
import Certificates from './subsections/certificates';
import TechStacks from './subsections/tech_stacks';
import Section from '../components/section';

const About = () => {
    return (
        <Section header="ABOUT" background="about_bg.webp" credit="opal" href="https://minecraftstorage.com/shaders/opal">
            <WhoIsRoy />
                <RoyMeaning />
                <Certificates />
                <TechStacks />
        </Section>
    )
}

export default About
