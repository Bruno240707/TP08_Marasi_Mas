import { Link, Outlet } from "react-router-dom";
import Footer from "../componentes/footer/footer";
import Navbar from "../componentes/header/navbar";

const MainLayout = ({categorias}) => {

    return (
        <>
            <Navbar categorias={categorias}/>
    
            <Outlet></Outlet>

            <Footer/>
        </>
    )
}

export default MainLayout

