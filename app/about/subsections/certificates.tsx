import React from 'react'
import CertificateCard, { Certificate } from '../components/certificate_card'
import styles from "../about.module.css";
import Subsection from '@/app/components/subsection';
import { Constants } from '@/app/constants';

const accenture_cert: Certificate = {
    logo: "accenture.svg",
    name: "Accenture",
    description: "Skills to Succeed Academy",
    date: "May 1, 2025",
    certificate: ["accenture.webp"],
};

const codechum_cert: Certificate = {
    logo: "codechum.svg",
    name: "CodeChum",
    description: "G2 CIS 1201 2nd Sem 2024-2025",
    date: "May 23, 2025",
    certificate: ["codechum.webp"],
};

const datacamp_cert: Certificate = {
    logo: "datacamp.svg",
    name: "DataCamp",
    description: "Course Completions",
    date: "December 23, 2025",
    certificate: ["datacamp_1.webp", "datacamp_2.webp", "datacamp_3.webp", "datacamp_4.webp"],
};

const cisco_cert: Certificate = {
    logo: "cisco.svg",
    name: "CISCO",
    description: "CCNA: Switching, Routing, and Wireless Essentials",
    date: "February 2, 2026",
    certificate: ["cisco.webp"],
};

const certificate_list: Certificate[] = [
    accenture_cert,
    codechum_cert,
    datacamp_cert,
    cisco_cert
];

const Certificates = () => {
    return (
        <Subsection header="Certificates" id={Constants.CERTIFICATES}>
            <div className="relative w-full overflow-hidden py-5">
                <div className="w-full overflow-hidden">
                    <div className={`${styles.marquee} flex w-max`}>

                        <div className="flex shrink-0 gap-50 pr-50">
                            {certificate_list.map((certificate) => (
                                <CertificateCard
                                    key={certificate.name}
                                    logo={certificate.logo}
                                    name={certificate.name}
                                    description={certificate.description}
                                    date={certificate.date}
                                    certificates={certificate.certificate}
                                />
                            ))}
                        </div>

                        <div
                            className="flex shrink-0 gap-50 pr-50"
                            aria-hidden="true"
                        >
                            {certificate_list.map((certificate) => (
                                <CertificateCard
                                    key={`duplicate-${certificate.name}`}
                                    logo={certificate.logo}
                                    name={certificate.name}
                                    description={certificate.description}
                                    date={certificate.date}
                                    certificates={certificate.certificate}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </Subsection>
    )
}

export default Certificates
