import React from 'react'

const ContactInformationCard = ({ label, contact }: { label: string, contact: string }) => {
    return (
        <div className="flex flex-col">
            {label}
            <div>{contact}</div>
        </div>
    )
}

export default ContactInformationCard

