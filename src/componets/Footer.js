import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Íconos de redes sociales

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h4 style={styles.title}>Sobre Nosotros</h4>
          <ul style={styles.list}>
            <li><a href="/quienes-somos" style={styles.link}>Quiénes Somos</a></li>
            <li><a href="/mision" style={styles.link}>Nuestra Misión</a></li>
            <li><a href="/contacto" style={styles.link}>Contacto</a></li>
          </ul>
        </div>

        <div style={styles.section}>
          <h4 style={styles.title}>Servicio al Cliente</h4>
          <ul style={styles.list}>
            <li><a href="/politica-de-devoluciones" style={styles.link}>Política de Devoluciones</a></li>
            <li><a href="/envios" style={styles.link}>Envíos</a></li>
            <li><a href="/faq" style={styles.link}>Preguntas Frecuentes</a></li>
          </ul>
        </div>

        <div style={styles.section}>
          <h4 style={styles.title}>Redes Sociales</h4>
          <div style={styles.socialIcons}>
            <a href="https://www.facebook.com" style={styles.iconLink}><FaFacebook style={styles.icon} /></a>
            <a href="https://www.instagram.com" style={styles.iconLink}><FaInstagram style={styles.icon} /></a>
            <a href="https://www.twitter.com" style={styles.iconLink}><FaTwitter style={styles.icon} /></a>
            <a href="https://www.linkedin.com" style={styles.iconLink}><FaLinkedin style={styles.icon} /></a>
          </div>
        </div>
      </div>

      <div style={styles.copyRight}>
        <p style={styles.text}>© 2024 Ecommerce Tecnología. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'rgba(17, 17, 17, 0.3)',
    padding: '4.0rem 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '120.0rem',
    margin: '0 auto',
  },
  section: {
    flex: 1,
    padding: '0 2.0rem',
  },
  title: {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    marginBottom: '1.0rem',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  link: {
    color: '#bbb',
    textDecoration: 'none',
    fontSize: '2rem',
    display: 'block',
    marginBottom: '.5rem',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1.0rem',
  },
  iconLink: {
    color: '#bbb',
    textDecoration: 'none',
  },
  icon: {
    fontSize: '2.4rem',
    margin: '0',
  },
  copyRight: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  text: {
    fontSize: '2rem',
    color: '#bbb',
  },
};

export default Footer;
