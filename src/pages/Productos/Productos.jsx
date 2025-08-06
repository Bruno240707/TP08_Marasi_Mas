import "./Productos.css";
import { useParams } from "react-router-dom";
import CardProductos from "../../componentes/cardProductos/cardProductos";

const Productos = ({ productos }) => {

    console.log(productos)

  const { Categoria } = useParams();

  return (
    <main className="productos-page">
      <section className="productos-header">
        <h1>{Categoria === "Todos" ? "Todos los Productos" : Categoria}</h1>
        <p>
          Descubrí nuestra selección de{" "}
          {Categoria === "Todos" ? "productos" : Categoria.toLowerCase()} al mejor precio.
        </p>
      </section>

      <CardProductos productos={productos} categoria={Categoria} />
    </main>
  );
};

export default Productos;
