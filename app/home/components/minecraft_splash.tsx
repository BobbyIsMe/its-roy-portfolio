import React from 'react'
import styles from '../home.module.css'
import TextHero from './text_hero';
import ContactInformationLinks from '@/app/contact/components/contact_information_links';


const MinecraftSplash = () => {
    return (
        <div className="relative flex flex-col items-center justify-center p-6">

            <div className="relative z-10">
                <div className="relative inline-block">

                    <TextHero top="Welcome To" bottom="ITS-ROY PORTFOLIO" />

                    <p className={`w-64 md:w-80 leading-snug ${styles.splashText}`}>
                        Full-stack website <br /> and mobile developer!
                    </p>
                </div>
                <ContactInformationLinks/>
            </div>

        </div>
    );
}

export default MinecraftSplash
