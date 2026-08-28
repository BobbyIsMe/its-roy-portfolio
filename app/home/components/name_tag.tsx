import React from 'react'
import styles from '../home.module.css';

const NameTag = () => {
    return (
        <div className={`bg-[rgb(0,0,0)]/10 p-1 ${styles.nameTag} w-fit`}>
            <span className="text-green-400">[USC]</span> Roy Dennis M. Patalinghug
        </div>
    )
}

export default NameTag