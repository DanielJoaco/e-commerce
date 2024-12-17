import React, { useEffect } from 'react';
import '../styles/InfoStyles.css';

const CustomerService = ({ section }) => {
  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [section]);

  return (
    <div className="container-info">
      <h1 className="main-title">Servicio al Cliente</h1>

      {/* Políticas de la Empresa */}
      <section id="politicas" className="section-container">
        <h3 className="section-title">Políticas de la Empresa</h3>
        <p className="text">
          Te agradecemos por formar parte de este gran sueño. Antes de seguir, deseamos compartir nuestros términos contigo para ofrecerte la mejor experiencia posible.
        </p>
        <p className="text">
          Nuestro emprendimiento se encuentra en <strong className="strong-text">Bucaramanga/Santander</strong>. Actualmente, brindamos todos nuestros productos y servicios en la ciudad y sus alrededores. Ofrecemos <strong className="strong-text">entrega gratis</strong> en compras superiores a $70.000.
        </p>
        <p className="text">
          En nuestro catálogo encontrarás la selección de los mejores productos de cada marca, <strong className="strong-text">listos para entrega inmediata</strong>. Si buscas algo que no esté en la lista, <strong className="strong-text">contáctanos</strong> y lo traeremos para ti.
        </p>
        <p className="text">
          Nos esforzamos por representar fielmente los colores de nuestros productos, aunque pueden variar en pantalla. No garantizamos la precisión de los colores que visualices.
        </p>
      </section>

      {/* Políticas de Envíos */}
      <section id="envios" className="section-container">
        <h3 className="section-title">Políticas de Envíos</h3>
        <p className="text">
          Los envíos se realizan desde <strong className="strong-text">Bucaramanga/Santander</strong>. Ofrecemos <strong className="strong-text">entrega gratis</strong> en compras superiores a $70.000. Los tiempos de entrega dependen de tu ubicación, pero nos esforzamos por enviarte los productos lo antes posible.
        </p>
      </section>

      {/* Preguntas Frecuentes */}
      <section id="faq" className="section-container">
        <h3 className="section-title">Preguntas Frecuentes</h3>
        <p className="text"><strong className="strong-text">Pregunta:</strong> ¿Cómo puedo realizar un pedido?
          <br /><strong className="strong-text">Respuesta:</strong> Puedes realizar tu pedido a través de nuestra página web o contactándonos directamente.
        </p>
        <p className="text"><strong className="strong-text">Pregunta:</strong> ¿Qué hago si un producto llega en mal estado?
          <br /><strong className="strong-text">Respuesta:</strong> Si un producto llega dañado, contáctanos de inmediato para gestionar un reemplazo o devolución.
        </p>
      </section>
    </div>
  );
};

export default CustomerService;
