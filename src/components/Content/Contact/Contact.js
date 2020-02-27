import React from 'react';
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <div className="contact">
            <div className="headline-contact">
                <h1>Kontakt os</h1>
                <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>

            </div>
            <ContactForm/>
        </div>
    )
}
