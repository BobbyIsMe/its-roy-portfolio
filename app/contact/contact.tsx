import React from 'react'
import ContactInformation from './subsections/contact_information';

const px_clamp: string = "px-[clamp(1rem,8vw,10rem)]";

const Contact = () => {
  return (
    <div className="w-full bg-sky-500 text-center">
      Contact Me
      <div className={`py-10 ${px_clamp} flex flex-wrap justify-center gap-10`}>      
        <ContactInformation/>
      </div>
    </div>
  )
}

export default Contact
