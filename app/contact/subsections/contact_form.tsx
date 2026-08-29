'use client'
import React from 'react'
import ContactInputField from '../components/contact_input_field';
import styles from '../contact.module.css';
import ContactSection from '../components/contact_section';

const ContactForm = () => {
    return (
        <ContactSection header="SEND A MESSAGE">
            <form className={styles.contactForm}>
                <ContactInputField name="Name" />
                <ContactInputField name="Email" type="email" />
                <ContactInputField name="Message" big={true} />
                <div className={`${styles.contactInputCard} md:col-span-2 flex items-end justify-end h-20`}>
                    <button type="submit" className={`${styles.contactInputFieldBorder} justify-self-end cursor-pointer`}
                        onMouseDown={
                            () => {
                                new Audio("/click.mp3").play().catch(() => { });
                            }
                        }>
                        <div className={styles.submitButtonBottom}>
                            <div className={styles.submitButton}>
                                Submit
                            </div>
                        </div>
                    </button>
                </div>
            </form>
        </ContactSection>
    )
}

export default ContactForm
