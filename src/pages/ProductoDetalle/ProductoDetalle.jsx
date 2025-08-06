import "./ProductoDetalle.css";
import { useParams, Link } from "react-router-dom";

const ProductoDetalle = ({ productos }) => {
  const { idProducto } = useParams();

  const productoActual = productos.find((p) => p.id.toString() === idProducto);

  if (!productoActual) {
    return <p className="sin-producto">Producto no encontrado</p>;
  }

  return (
    <main className="detalle-container">
      <div className="detalle-card">
        <div className="detalle-imagen">
          <img src={productoActual.image} />
        </div>
        <div className="detalle-info">
          <h1>{productoActual.title}</h1>
          <p className="detalle-categoria">{productoActual.category}</p>
          <p className="detalle-descripcion">{productoActual.description}</p>
          <p className="detalle-precio">${productoActual.price}</p>
          <p className="detalle-rating">⭐ {productoActual.rating.rate} ({productoActual.rating.count} opiniones)</p>
          <div className="detalle-actions">
            <button className="btn-comprar">Comprar</button>
            <Link to={`/Productos/${productoActual.category}`} className="btn-volver">Volver</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductoDetalle;
