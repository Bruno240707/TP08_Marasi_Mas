import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({categorias}) => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./src/assets/logo.png"></img>
        <span>Celi</span>
      </div>

      <button className="menu-toggle">
        ☰
      </button>

      <ul>
        <Link to="/"><p>Home</p></Link>

        <Link to="/QuienesSomos"><p>Quienes somos</p></Link>

        <div className="dropdown">
            <p className="nav-link">Productos ▾</p>
            <div className="dropdown-content">
                
                

                <Link to="/productos/Todos">Todos</Link>
                {categorias.map((c) => (
                    <>
                        <Link to={"/Productos/" + c} > {c} </Link>
                    </>
                ))}
            </div>
        </div>

        <Link to="/Contacto"><p>Contacto</p></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
