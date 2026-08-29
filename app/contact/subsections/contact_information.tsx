import React from 'react'
import ContactInformationCard from '../components/contact_information_card';
import ContactInformationLinks from '../components/contact_information_links';
import styles from '../contact.module.css';
import ContactSection from '../components/contact_section';

const ContactInformation = () => {
    return (
        <ContactSection header="SOCIALS">
            <div className={`${styles.contactInfo} flex flex-1 flex-col`}>
                <div className="flex flex-1 flex-col">
                    <div className={`${styles.contactInputCard} flex flex-1 flex-col gap-5`}>
                        <ContactInformationCard label="EMAIL" contact="joshuacc823@gmail.com" />
                        <ContactInformationCard label="CONTACT NUMBER" contact="+639616371106" />
                        <ContactInformationCard label="DISCORD" contact="BobbyIsMe" />
                    </div>

                    <div className={`${styles.contactInputCard} mt-auto`}>
                        <ContactInformationLinks />
                    </div>
                </div>
            </div>
        </ContactSection>
    )
}

export default ContactInformation
