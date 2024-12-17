import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../styles/FooterStyles.css';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-title">Sobre Nosotros</h4>
          <ul className="footer-list">
            <li>
              <button
                onClick={() => onNavigate('aboutUs', 'mision')}
                className="footer-link"
              >
                Misión
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('aboutUs', 'quienesSomos')}
                className="footer-link"
              >
                ¿Quiénes Somos?
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('aboutUs', 'contacto')}
                className="footer-link"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Servicio al Cliente</h4>
          <ul className="footer-list">
            <li>
              <button
                onClick={() => onNavigate('customerService', 'politicas')}
                className="footer-link"
              >
                Políticas
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('customerService', 'envios')}
                className="footer-link"
              >
                Envíos
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('customerService', 'faq')}
                className="footer-link"
              >
                Preguntas Frecuentes
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Redes Sociales</h4>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100094601974802"
              className="footer-icon-link"
            >
              <FaFacebook className="footer-icon" />
            </a>
            <a
              href="https://www.instagram.com/yane_beautystore/"
              className="footer-icon-link"
            >
              <FaInstagram className="footer-icon" />
            </a>
            <a
              href="https://www.tiktok.com/@yane_beautystore"
              className="footer-icon-link"
            >
              <FaTiktok className="footer-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copyRight">
        <p className="footer-text">
          © 2024 Yane, beauty store. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
