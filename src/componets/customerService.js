import React, { useEffect } from 'react';

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
    <div className="customer-service">
      <h1>Servicio al Cliente</h1>
      <section id="devoluciones">
        <h2>Política de Devoluciones</h2>
        <p>Detalles sobre devoluciones...</p>
      </section>
      <section id="envios">
        <h2>Envíos</h2>
        <p>Información sobre envíos...</p>
      </section>
      <section id="faq">
        <h2>Preguntas Frecuentes</h2>
        <p>Respuestas a preguntas comunes...</p>
      </section>
    </div>
  );
};

export default CustomerService;
