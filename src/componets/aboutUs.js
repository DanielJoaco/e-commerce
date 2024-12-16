import React from 'react';

export default function AboutUs() {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <section id="quienesSomos" style={{ marginBottom: '2rem' }}>
                <h2>¿Quiénes Somos?</h2>
                <p>Somos una empresa comprometida con...</p>
            </section>
            <section id="mision" style={{ marginBottom: '2rem' }}>
                <h2>Misión</h2>
                <p>Nuestra misión es...</p>
            </section>
            <section id="contacto" style={{ marginBottom: '2rem' }}>
                <h2>Contacto</h2>
                <p>Contacta con nosotros en: contacto@ejemplo.com</p>
            </section>
        </div>
    );
}