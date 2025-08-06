import "./QuienesSomos.css";

const QuienesSomos = () => {
  return (
    <main className="quienes-somos">
      <section className="qs-hero">
        <h1>¿Quiénes Somos?</h1>
        <p>
          Somos una empresa dedicada a ofrecer productos de alta calidad en
          <strong> joyería</strong>, <strong>ropa</strong> y <strong>electrónica</strong>,
          combinando elegancia, estilo e innovación.
        </p>
      </section>

      <section className="qs-historia">
        <h2>Nuestra Historia</h2>
        <p>
          Desde nuestros inicios, trabajamos para brindarte lo mejor. Empezamos como una
          pequeña tienda de joyería y hoy somos un referente en moda y tecnología.
          Nuestro compromiso es ofrecerte siempre productos que marquen la diferencia.
        </p>
      </section>

      <section className="qs-mvv">
        <div className="mvv-card">
          <h3>Misión</h3>
          <p>
            Proporcionar productos únicos que combinen calidad y diseño, asegurando una
            experiencia de compra satisfactoria y confiable.
          </p>
        </div>
        <div className="mvv-card">
          <h3>Visión</h3>
          <p>
            Ser la tienda líder en joyería, moda y tecnología, reconocida por la excelencia
            en el servicio y la innovación constante.
          </p>
        </div>
        <div className="mvv-card">
          <h3>Valores</h3>
          <ul>
            <li>Calidad</li>
            <li>Confianza</li>
            <li>Innovación</li>
            <li>Compromiso</li>
          </ul>
        </div>
      </section>

      <section className="qs-imagen">
        <img src="./src/assets/equipo.png" alt="Nuestro equipo" />
        <div>
          <h2>Nuestro Equipo</h2>
          <p>
            Un grupo de profesionales apasionados por ofrecerte lo mejor. Cada detalle
            cuenta para que vivas la mejor experiencia de compra.
          </p>
        </div>
      </section>
    </main>
  );
};

export default QuienesSomos;
