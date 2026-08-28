'use client'
import React from 'react'
import ContactInputField from '../components/contact_input_field';

const ContactForm = () => {
    return (
        <form className="p-5 bg-white grid grid-cols-1 auto-rows-max gap-5 h-max md:grid-cols-2"
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                }
            }}>
            <ContactInputField name="Name" />
            <ContactInputField name="Email" type="email" />
            <ContactInputField name="Message" big={true} />
            <button type="submit" className="justify-self-end md:col-span-2">Submit</button>
        </form>
    )
}

export default ContactForm
