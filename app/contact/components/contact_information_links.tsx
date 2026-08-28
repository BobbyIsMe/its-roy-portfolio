import React from 'react'
import { ContactInformationLink } from '../components/contact_information_props';
import ContactInformationButton from '../components/contact_information_button';

const facebook: ContactInformationLink = {
  icon: "facebook.webp",
  url: "https://www.facebook.com/roydennis.patalinghug/"
};

const instagram: ContactInformationLink = {
  icon: "instagram.webp",
  url: "https://www.instagram.com/rei.muun/"
};

const github: ContactInformationLink = {
  icon: "github.webp",
  url: "https://github.com/BobbyIsMe"
}

const contact_link_list: ContactInformationLink[] = [
  facebook, instagram, github
]


const ContactInformationLinks = () => {
  return (
    <div className="flex flex-row gap-5">
      {contact_link_list.map(contact_link => <ContactInformationButton key={contact_link.icon} icon={contact_link.icon} url={contact_link.url} />)}
    </div>
  )
}

export default ContactInformationLinks
