import Subsection from '@/app/components/subsection'
import React from 'react'
import LetterCard, { LetterMeaning } from '../components/letter_card';
import { Constants } from '@/app/constants';

const letters: LetterMeaning[] = [
    { letter: 'R', meaning: "Right man for the job", blockImg: "diamond.webp", itemImg: "diamond_ingot.webp", color: "text-[rgb(102,246,228)]"},
    { letter: 'O', meaning: "Object oriented enthusiast", blockImg: "gold.webp", itemImg: "gold_ingot.webp", color: "text-[rgb(240,235,80)]"},
    { letter: 'Y', meaning: "You. Only. Live. Once.", blockImg: "iron.webp", itemImg: "iron_ingot.webp", color: "text-[rgb(188,153,128)]"},
];

const RoyMeaning = () => {
    return (
        <Subsection header="ROY MEANING" id={Constants.MEANING}>
            <div className="p-10 flex flex-col flex_wrap sm:grid sm:grid-cols-3">
                {letters.map(letter => <LetterCard key={letter.letter} letter={letter} />)}
            </div>
        </Subsection>
    )
}

export default RoyMeaning
