"use client"
import React, { useState } from 'react'
import styles from '../about.module.css'
import Image from 'next/image'
import { Constants } from '@/app/constants';
import ScrollAnimation from '@/app/scroll_animation';

export type LetterMeaning = {
    letter: string;
    meaning: string;
    blockImg: string;
    itemImg: string;
    color: string;
}

const LetterCard = ({ letter }: { letter: LetterMeaning }) => {

    const [breakState, setBreakState] = useState(0);
    const [flag, setFlag] = useState(false);
    const [showAnimation, setShowAnimation] = useState(true);


    return (
        <div className="relative aspect-square">
            {
                breakState < 4 ? <button
                    className={styles.blockCard}
                    style={{ backgroundImage: `url('/${letter.blockImg}')`, cursor: `url('/pickaxe.png'), auto !important` }}
                    onClick={() => {
                        let state = 0;

                        if (flag)
                            return;

                        setFlag(true);

                        const audio = new Audio(`${Constants.ANIMATIONS_PATH}breaking_sound.mp3`);
                        audio.loop = true;
                        audio.play().catch(() => { });

                        const interval = setInterval(() => {
                            state++;
                            setBreakState(state);

                            if (state > 3) {
                                audio.pause();
                                audio.currentTime = 0;
                                new Audio(`${Constants.ANIMATIONS_PATH}broken_sound.mp3`).play().catch(() => { });
                                clearInterval(interval);
                                return;
                            }

                        }, 500);
                    }}
                >
                    <div className={`${styles.blockLetter} ${letter.color}`}>
                        {letter.letter}<div className={styles.animateSpin}>
                        </div>
                    </div>
                </button> :
                    <div className={styles.blockCard} style={{ backgroundImage: `url('/stone.webp')` }}>
                        <ScrollAnimation className={`${styles.blockContent} ${letter.color}`}>
                                {letter.meaning}
                                <div className={styles.animateSpin}>
                                    <div className="aspect-square w-full" style={{ maxWidth: 'clamp(16px, 5vw + 20px, 64px)' }}>
                                        <Image
                                            src={`/${letter.itemImg}`}
                                            alt=""
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                        </ScrollAnimation>
                    </div>
            }
            {
                (breakState > 0 && breakState != 4) && <Image
                    src={`${Constants.ANIMATIONS_PATH}breaking${breakState}.png`}
                    alt=""
                    fill
                    className="object-cover hover:cursor-[url('/pickaxe.png'),auto]"
                />
            }
            {
                (breakState == 4 && showAnimation) && <div className="relative aspect-square w-full">
                    <video
                        src="/animations/broken.webm"
                        autoPlay
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full object-contain"
                        onEnded={() => setShowAnimation(false)}
                    />
                </div>
            }


        </div>
    )
}

export default LetterCard
