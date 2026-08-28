import { ReactNode } from 'react'

const Section = ({ children, header, background }: { children: ReactNode, header: string, background: string }) => {
    return (
        <div className="relative w-full overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(/${background})` }}>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            <div className={`relative z-10 py-10 section text-center w-full`}>
                <div className="sectionContent">
                    <h2>{header}</h2>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Section
