'use client';
import React from 'react'
import Image from 'next/image';
import styles from "../about.module.css";

export type Certificate = {
  logo: string;
  name: string;
  description: string;
  date: string;
  certificate: string[];
}

function click() {
  console.log("hi");
}

const CertificateCard = ({ logo, name, description, date }: { logo: string, name: string, description: string, date: string }) => {
  return (
    <button onClick={click} className={`${styles.certificateCard} w-full p-2 grid grid-rows-3 grid-cols-[auto_1fr] text-start`}>
      <div className="row-span-3 flex items-center justify-center pr-5">
        <Image
          src={`/certificates/${logo}`}
          alt={name}
          width={64}
          height={64}
        />
      </div>
      <div className={styles.certificateTitle}>{name}</div>
      <div className={styles.certificateDesc}>{description}</div>
      <div className={styles.certificateDate}>{date}</div>
    </button>
  )
}

export default CertificateCard
