import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className="contact-us">
            <header>
                <h1>Kontakt</h1>
            </header>
            <section className="contact-info">
                <h2>Dane Kontaktowe</h2>
                <p>
                    Skontaktuj się z nami w dowolnej chwili. Jesteśmy dostępni, aby odpowiedzieć na Twoje pytania i rozwiać wątpliwości.
                </p>
                <ul>
                    <li>
                        <strong>Adres:</strong> ul. Przykładowa 123, 00-000 Miasto
                    </li>
                    <li>
                        <strong>Telefon:</strong> +48 123 456 789
                    </li>
                    <li>
                        <strong>Email:</strong> kontakt@example.com
                    </li>
                </ul>
            </section>
            <section className="contact-form">
                <h2>Formularz Kontaktowy</h2>
                <p>
                    Skorzystaj z formularza poniżej, aby wysłać nam wiadomość. Postaramy się odpowiedzieć jak najszybciej.
                </p>
                <form>
                    <div className="form-group">
                        <label for="name">Imię i Nazwisko:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label for="message">Wiadomość:</label>
                        <textarea id="message" name="message" rows="1" required></textarea>
                    </div>
                    <button type="submit">Wyślij</button>
                </form>
            </section>
        </div>
    )
}

export default Contact;
