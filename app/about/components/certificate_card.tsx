'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import styles from "../about.module.css";
import ImagePopup from '@/app/components/image_popup';

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
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  return (
    <button onClick={() => {setIsPopupOpen(true)}} className={`${styles.certificateCard} w-full p-2 grid grid-rows-3 grid-cols-[auto_1fr] text-start`}>
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
      {(
        <ImagePopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          src="/home_bg.webp"
          alt="Example sample image"
        />
      )}
    </button>
  )
}

export default CertificateCard
