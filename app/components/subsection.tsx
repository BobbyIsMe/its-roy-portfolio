import { ReactNode } from 'react'
import ScrollAnimation from '../scroll_animation';

const Subsection = ({ header, children, threshold = 0.8}: { header: string, children: ReactNode, threshold? : number}) => {
    return (
        <ScrollAnimation threshold={threshold}>
            <div className="mx-[clamp(1rem,7vw,3rem)] flex flex-col justify-center">
                <div className="subsection-header">
                    {header}
                </div>
                <div className="subsection">
                    {children}
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default Subsection
