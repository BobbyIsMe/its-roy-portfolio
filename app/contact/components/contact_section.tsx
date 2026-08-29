import React, { ReactNode } from 'react'

const ContactSection = ({ header, children }: { header: string, children: ReactNode }) => {
    return (
         <div className="flex flex-col">
            <div className="subsection-header">
                {header}
            </div>
            <div className="flex flex-1 flex-col">
                {children}
            </div>
        </div>
    )
}

export default ContactSection
