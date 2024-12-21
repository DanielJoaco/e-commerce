import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/FooterStyles.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-title">Sobre Nosotros</h4>
          <ul className="footer-list">
            <li>
              <button
                onClick={() => navigate("/aboutUs#mision")}
                className="footer-link"
              >
                Misión
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/aboutUs#quienesSomos")}
                className="footer-link"
              >
                ¿Quiénes Somos?
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/aboutUs#contacto")}
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
                onClick={() => navigate("/customerService#politicas")}
                className="footer-link"
              >
                Políticas
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/customerService#envios")}
                className="footer-link"
              >
                Envíos
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/customerService#faq")}
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="footer-icon" />
            </a>
            <a
              href="https://www.instagram.com/yane_beautystore/"
              className="footer-icon-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="footer-icon" />
            </a>
            <a
              href="https://www.tiktok.com/@yane_beautystore"
              className="footer-icon-link"
              target="_blank"
              rel="noopener noreferrer"
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
