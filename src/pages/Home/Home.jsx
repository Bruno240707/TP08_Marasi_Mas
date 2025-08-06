import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Descubrí lo mejor en Joyería, Moda y Tecnología</h1>
          <p>Elegancia, estilo y la última innovación en un solo lugar.</p>
          <Link to="/Productos/Todos" className="btn-primary">Ver Productos</Link>
        </div>
      </section>

      <section className="categories">
        <h2>Categorías Destacadas</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFxDGYqquXeotGU5c0c0zq_Kl6QrhEXkBqA&s" alt="Joyería" />
            <h3>Joyería</h3>
            <Link to="/Productos/jewelery" className="btn-secondary">Ver más</Link>
          </div>
          <div className="category-card">
            <img src="https://elonce-media.elonce.com/fotos-nuevo/2022/10/05/o_1664998193.jpg" alt="Ropa" />
            <h3>Ropa de Hombre</h3>
            <Link to="/Productos/men's clothing" className="btn-secondary">Ver más</Link>
          </div>
          <div className="category-card">
            <img src="https://www.infotextil.com.ar/wp-content/uploads/2024/03/b-20.jpg" alt="Ropa" />
            <h3>Ropa de Mujer</h3>
            <Link to="/Productos/women's clothing" className="btn-secondary">Ver más</Link>
          </div>
          <div className="category-card">
            <img src="https://www.thenocgroup.com/wp-content/uploads/2023/03/dispositivos_ectronicos_thenoc.jpg" alt="Electrónicos" />
            <h3>Electrónicos</h3>
            <Link to="/Productos/electronics" className="btn-secondary">Ver más</Link>
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
