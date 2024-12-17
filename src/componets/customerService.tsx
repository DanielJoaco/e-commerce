import React, { useEffect } from 'react';

const CustomerService = ({ section }: { section: string }) => {
  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [section]);

  const styles: { [key: string]: React.CSSProperties } = {
    customerService: {
      fontFamily: "'Lobster', sans-serif",
      lineHeight: 1.6,
      color: '#333',
      margin: '20px',
      padding: '20px',
    },
    mainTitle: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      color: '#561290',
      textAlign: 'center' as const,
      marginBottom: '2rem',
      textShadow: '0.1rem 0.1rem 0.5rem white',
    },
    sectionContainer: {
      marginBottom: '3rem',
      padding: '1.5rem',
      borderRadius: '8px',
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      color: '#e136c6',
      marginBottom: '1rem',
      textShadow: "0.1rem 0.1rem 0.5rem white",
    },
    text: {
      fontSize: '1.6rem',
      margin: '10px 0',
      textShadow: "0.1rem 0.1rem 0.5rem #561290",
      color: "white",
    },
    strongText: {
      color: '#561290',
      fontWeight: 'bold',
      textShadow: "0.1rem 0.1rem 0.5rem white",
    },
  };

  return (
    <div style={styles.customerService}>
      <h1 style={styles.mainTitle}>Servicio al Cliente</h1>

      {/* Políticas de la Empresa */}
      <section id="politicas" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Políticas de la Empresa</h2>
        <p style={styles.text}>
          Te agradecemos por formar parte de este gran sueño. Antes de seguir, deseamos compartir nuestros términos contigo para ofrecerte la mejor experiencia posible.
        </p>
        <p style={styles.text}>
          Nuestro emprendimiento se encuentra en <strong style={styles.strongText}>Bucaramanga/Santander</strong>. Actualmente, brindamos todos nuestros productos y servicios en la ciudad y sus alrededores. Ofrecemos <strong style={styles.strongText}>entrega gratis</strong> en compras superiores a $70.000.
        </p>
        <p style={styles.text}>
          En nuestro catálogo encontrarás la selección de los mejores productos de cada marca, <strong style={styles.strongText}>listos para entrega inmediata</strong>. Si buscas algo que no esté en la lista, <strong style={styles.strongText}>contáctanos</strong> y lo traeremos para ti.
        </p>
        <p style={styles.text}>
          Nos esforzamos por representar fielmente los colores de nuestros productos, aunque pueden variar en pantalla. No garantizamos la precisión de los colores que visualices.
        </p>
      </section>

      {/* Políticas de Envíos */}
      <section id="envios" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Políticas de Envíos</h2>
        <p style={styles.text}>
          Los envíos se realizan desde <strong style={styles.strongText}>Bucaramanga/Santander</strong>. Ofrecemos <strong style={styles.strongText}>entrega gratis</strong> en compras superiores a $70.000. Los tiempos de entrega dependen de tu ubicación, pero nos esforzamos por enviarte los productos lo antes posible.
        </p>
      </section>

      {/* Preguntas Frecuentes */}
      <section id="faq" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Preguntas Frecuentes</h2>
        <p style={styles.text}><strong style={styles.strongText}>Pregunta:</strong> ¿Cómo puedo realizar un pedido?
          <br /><strong style={styles.strongText}>Respuesta:</strong> Puedes realizar tu pedido a través de nuestra página web o contactándonos directamente.
        </p>
        <p style={styles.text}><strong style={styles.strongText}>Pregunta:</strong> ¿Qué hago si un producto llega en mal estado?
          <br /><strong style={styles.strongText}>Respuesta:</strong> Si un producto llega dañado, contáctanos de inmediato para gestionar un reemplazo o devolución.
        </p>
      </section>
    </div>
  );
};

export default CustomerService;