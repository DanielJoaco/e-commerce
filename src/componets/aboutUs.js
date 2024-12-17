import React from 'react';

const AboutUs = () => {
  const styles = {
    aboutUs: {
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6,
      color: '#333',
      margin: '20px',
      padding: '20px',
    },
    mainTitle: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      color: '#561290',
      textAlign: 'center',
      marginBottom: '2rem',
      textShadow: '0.1rem 0.1rem 0.5rem rgba(85, 18, 144, 0.3)',
    },
    sectionContainer: {
      marginBottom: '3rem',
      padding: '1.5rem',
      borderRadius: '8px',
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      color: '#e136c6',
      marginBottom: '1rem',
    },
    text: {
      fontSize: '1.6rem',
      margin: '10px 0',
      color: '#555',
    },
    strongText: {
      color: '#e136c6',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.aboutUs}>
      <h1 style={styles.mainTitle}>About Us</h1>

      {/* Quiénes Somos */}
      <section id="quienesSomos" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>¿Quiénes Somos?</h2>
        <p style={styles.text}>
          Somos Yane Beauty Store, una empresa dedicada a fortalecer la seguridad y autoestima de nuestros clientes a través de productos y servicios de imagen personal.
          Promovemos la belleza natural y el respeto por la salud mental y física, ayudando a nuestros clientes a alcanzar sus metas personales y profesionales.
        </p>
      </section>

      {/* Misión */}
      <section id="mision" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Misión</h2>
        <p style={styles.text}>
          Nuestra misión es ofrecer productos y servicios diseñados para mejorar la imagen personal y profesional de nuestros clientes. 
          Nos enfocamos en fortalecer la autoestima, el valor propio y el respeto por la belleza natural. Contribuimos al bienestar de nuestros clientes aplicando 
          el principio de que la salud es siempre belleza.
        </p>
      </section>

      {/* Contacto */}
      <section id="contacto" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Contacto</h2>
        <p style={styles.text}>Contacta con nosotros en: <strong style={styles.strongText}>contacto@yanebeautystore.com</strong></p>
        <p style={styles.text}>Teléfono: <strong style={styles.strongText}>+57 123 456 7890</strong></p>
      </section>
    </div>
  );
};

export default AboutUs;
