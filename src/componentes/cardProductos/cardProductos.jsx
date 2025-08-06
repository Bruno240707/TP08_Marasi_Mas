import "./cardProductos.css";

const CardProductos = ({ productos, categoria }) => {
  const productosMostrar =
    categoria === "Todos"
      ? productos
      : productos.filter((p) => p.category === categoria);

  return (
    <div className="productos-grid">
      {productosMostrar.length > 0 ? (
        productosMostrar.map((p) => (
          <div className="producto-card" key={p.id}>
            <img src={p.image} alt={p.title} />
            <div className="producto-info">
              <h3>{p.title}</h3>
              <p className="producto-precio">${p.price}</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>
        ))
      ) : (
        <p className="sin-productos">No hay productos en esta categoría</p>
      )}
    </div>
  );
};

export default CardProductos;
