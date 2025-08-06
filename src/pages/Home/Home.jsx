import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Descubrí lo mejor en Joyería, Moda y Tecnología</h1>
          <p>Elegancia, estilo y la última innovación en un solo lugar.</p>
          <Link to="/productos" className="btn-primary">Ver Productos</Link>
        </div>
      </section>

      <section className="categories">
        <h2>Categorías Destacadas</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="/assets/joyeria.jpg" alt="Joyería" />
            <h3>Joyería</h3>
            <Link to="/productos/joyeria" className="btn-secondary">Ver más</Link>
          </div>
          <div className="category-card">
            <img src="/assets/ropa.jpg" alt="Ropa" />
            <h3>Ropa de Hombre</h3>
            <Link to="/productos/ropa" className="btn-secondary">Ver más</Link>
          </div>
          <div className="category-card">
            <img src="/assets/ropa.jpg" alt="Ropa" />
            <h3>Ropa de Mujer</h3>
            <Link to="/productos/ropa" className="btn-secondary">Ver más</Link>
          </div>
          <div className="category-card">
            <img src="/assets/electronicos.jpg" alt="Electrónicos" />
            <h3>Electrónicos</h3>
            <Link to="/productos/electronicos" className="btn-secondary">Ver más</Link>
          </div>
        </div>
      </section>

      <section className="promo">
        <div className="promo-content">
          <h2>Ofertas Exclusivas</h2>
          <p>No te pierdas descuentos increíbles en productos seleccionados.</p>
          <Link to="/productos" className="btn-primary">Comprar ahora</Link>
        </div>
      </section>

      <section className="benefits">
        <h2>¿Por qué elegirnos?</h2>
        <div className="benefit-grid">
          <div className="benefit-item">
            <img src="/assets/envio.svg" alt="Envíos rápidos" />
            <h3>Envíos Rápidos</h3>
            <p>Llegamos a todo el país con la mejor logística.</p>
          </div>
          <div className="benefit-item">
            <img src="/assets/seguridad.svg" alt="Pago seguro" />
            <h3>Pago Seguro</h3>
            <p>Protegemos tus compras con los mejores sistemas.</p>
          </div>
          <div className="benefit-item">
            <img src="/assets/calidad.svg" alt="Calidad garantizada" />
            <h3>Calidad Garantizada</h3>
            <p>Productos seleccionados con altos estándares.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
