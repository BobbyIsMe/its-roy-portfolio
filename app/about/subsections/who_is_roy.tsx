import React from 'react'
import styles from '../about.module.css'
import InfoCard from '../components/info_card';
import ScrollAnimation from '@/app/scroll_animation';

const WhoIsRoy = () => {
    return (
        <ScrollAnimation>
            <div className="flex flex-wrap gap-10 justify-center">
                <div className={styles.video}>
                    <video width="854" height="480" controls preload="none" className="border-4 border-[rgb(30,30,31)]"><source src="/commercial.mp4" type="video/mp4" /></video>
                    My Commercial
                </div>
                <InfoCard />
            </div>
        </ScrollAnimation>
    )
}

export default WhoIsRoy
