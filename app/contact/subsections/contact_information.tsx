import React from 'react'
import ContactInformationCard from '../components/contact_information_card';
import ContactInformationButton from '../components/contact_information_button';
import { ContactInformationLink } from '../components/contact_information_props';
import ContactForm from './contact_form';
import ContactInformationLinks from '../components/contact_information_links';

const ContactInformation = () => {
    return (
        <div className="flex flex-wrap text-left gap-20">
            <div>
                <div>Have any questions?</div>
                <div>Contact Me!</div>
                <div className="flex flex-wrap item-start justify-start">
                    <div className="flex flex-col gap-5">
                        <ContactInformationCard label="EMAIL" contact="joshuacc823@gmail.com" />
                        <ContactInformationCard label="CONTACT NUMBER" contact="+639616371106" />
                        <ContactInformationCard label="DISCORD" contact="BobbyIsMe" />
                        <ContactInformationLinks/>
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    )
}

export default ContactInformation
