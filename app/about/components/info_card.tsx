"use client"
import React, { useState } from 'react'
import styles from '../about.module.css'
import MinecraftButton from '@/app/components/minecraft_button';
import Pagination from '@/app/components/pagination';

const Text = () => {

}

type TextInfo = {
    text: string
}

const intro: TextInfo = {
    text: "Hello, I am Roy Dennis M. Patalinghug! I am a 3rd year student, currently taking Bachelor of Science in Information Technology at the University of San Carlos."
}

const textList: TextInfo[] = [
    intro, intro, intro
];

const NavigateButton = ({ text, onClick, isShown }: { text: string, onClick: () => void, isShown: boolean }) => {
    return (
        isShown ? <MinecraftButton onClick={onClick}>{text}</MinecraftButton> : <></>
    );
}

const InfoCard = () => {
    const [page, setPage] = useState(0);

    return (
        <div className="w-full max-w-160">
            <div className={styles.infoCardOuter}>
                <div className={styles.infoCardInner}>
                    <div className={styles.infoCardText}> MEET ROY</div>
                    <div className={styles.infoCardContent}>
                        <div className={`${styles.contentText} overflow-y-auto`}>{textList[page].text}</div>
                        <Pagination currentPage={page} maxPage={textList.length} 
                        onPrevious={() => {
                            setPage(page - 1)
                        }
                        }
                        onNext={() => {
                            setPage(page + 1)
                        }
                        }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
