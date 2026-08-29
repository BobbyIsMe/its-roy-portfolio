import { ReactNode } from 'react'

const Section = ({ children, header, background, credit, href }: { children: ReactNode, header: string, background: string, credit?: string, href?: string }) => {
    return (
        <div className="relative w-full overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(/${background})` }}>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            <div className="relative z-10">
                <div className="py-30 section text-center w-full">
                    <div className="sectionHeader">
                        <h2>{header}</h2>
                    </div>
                    <div className="sectionContent">
                        {children}
                    </div>
                </div>
                {credit && <div className="justify-self-end self-end credit"><a href={href} target="_blank"
                    rel="noopener noreferrer">@{credit}</a></div>}
            </div>
        </div>
    )
}

export default Section
