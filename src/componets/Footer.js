import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = ({ onNavigate }) => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h4 style={styles.title}>Sobre Nosotros</h4>
          <ul style={styles.list}>
            <li>
              <button
                onClick={() => onNavigate('aboutUs', 'mision')}
                style={styles.link}
              >
                Misión
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('aboutUs', 'quienesSomos')}
                style={styles.link}
              >
                ¿Quiénes Somos?
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('aboutUs', 'contacto')}
                style={styles.link}
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h4 style={styles.title}>Servicio al Cliente</h4>
          <ul style={styles.list}>
            <li>
              <button
                onClick={() => onNavigate('customerService', 'devoluciones')}
                style={styles.link}
              >
                Política de Devoluciones
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('customerService', 'envios')}
                style={styles.link}
              >
                Envíos
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('customerService', 'faq')}
                style={styles.link}
              >
                Preguntas Frecuentes
              </button>
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h4 style={styles.title}>Redes Sociales</h4>
          <div style={styles.socialIcons}>
            <a
              href="https://www.facebook.com/profile.php?id=100094601974802"
              style={styles.iconLink}
            >
              <FaFacebook style={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/yane_beautystore/"
              style={styles.iconLink}
            >
              <FaInstagram style={styles.icon} />
            </a>
            <a
              href="https://www.tiktok.com/@yane_beautystore"
              style={styles.iconLink}
            >
              <FaTiktok style={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      <div style={styles.copyRight}>
        <p style={styles.text}>
          © 2024 Yane, beauty store. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'rgba(87, 18, 135, 0.75)',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    marginBottom: '1.0rem',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    color: '#bbb',
    textDecoration: 'none',
    fontSize: '2rem',
    display: 'block',
    marginBottom: '.5rem',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    textAlign: 'left',
    padding: '0',
    fontFamily: 'inherit',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2rem',
    width: "100%"
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
