import React from 'react';
import '../styles/InfoStyles.css';

const AboutUs = () => {
  return (
    <div className="container">
      <h1 className="main-title">Sobre nosotros</h1>

      {/* Quiénes Somos */}
      <section id="quienesSomos" className="section-container">
        <h2 className="section-title">¿Quiénes Somos?</h2>
        <p className="text">
          Somos Yane Beauty Store, una empresa dedicada a fortalecer la seguridad y autoestima de nuestros clientes a través de productos y servicios de imagen personal.
          Promovemos la belleza natural y el respeto por la salud mental y física, ayudando a nuestros clientes a alcanzar sus metas personales y profesionales.
        </p>
      </section>

      {/* Misión */}
      <section id="mision" className="section-container">
        <h2 className="section-title">Misión</h2>
        <p className="text">
          Nuestra misión es ofrecer productos y servicios diseñados para mejorar la imagen personal y profesional de nuestros clientes. 
          Nos enfocamos en fortalecer la autoestima, el valor propio y el respeto por la belleza natural. Contribuimos al bienestar de nuestros clientes aplicando 
          el principio de que la salud es siempre belleza.
        </p>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section-container">
        <h2 className="section-title">Contacto</h2>
        <p className="text">Contacta con nosotros en: <strong className="strong-text">contacto@yanebeautystore.com</strong></p>
        <p className="text">Teléfono: <strong className="strong-text">+57 123 456 7890</strong></p>
      </section>
    </div>
  );
};

export default AboutUs;
