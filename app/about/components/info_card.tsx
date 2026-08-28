import React from 'react'
import styles from '../about.module.css'
import MinecraftButton from '@/app/components/minecraft_button';

const Text = () => {

}

const InfoCard = () => {
    return (
        <div className="w-full max-w-160">
            <div className={styles.infoCardOuter}>
                <div className={styles.infoCardInner}>
                    <div className={styles.infoCardText}> MEET ROY</div>
                    <div className={styles.infoCardContent}>
                        <div className={styles.contentText}>Hello, I am Roy Dennis M. Patalinghug! I am a 3rd year student, currently taking Bachelor of Science in Information Technology at the University of San Carlos.</div>
                        <div className="self-end"><MinecraftButton>{"NEXT"}</MinecraftButton></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
