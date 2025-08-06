import "./Contacto.css";

const Contacto = () => {
  return (
    <main className="contacto">
      <section className="contacto-header">
        <h1>Contacto</h1>
        <p>¿Tenés alguna duda? ¡Estamos para ayudarte!</p>
      </section>

      <section className="contacto-contenido">
        <div className="contacto-info">
          <h2>Nuestra Información</h2>
          <p><strong>Dirección:</strong> Av. Benezra 123, Buenos Aires</p>
          <p><strong>Teléfono:</strong> +54 11 3123-4312</p>
          <p><strong>Email:</strong> contacto@Celi.com</p>
        </div>

        <div className="contacto-form">
          <h2>Envíanos un mensaje</h2>
          <form>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo electrónico" required />
            <textarea placeholder="Escribí tu mensaje..." rows="5" required></textarea>
            <button type="submit" className="btn-primary">Enviar</button>
          </form>
        </div>
      </section>

      <section className="contacto-mapa">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.606878903779!2d-58.38155968459691!3d-34.60368428045912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacae0f5e6b9%3A0xdea17b5b2df90f9a!2sBuenos%20Aires!5e0!3m2!1ses!2sar!4v1693328123456"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
};

export default Contacto;
