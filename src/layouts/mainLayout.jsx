import { Link, Outlet } from "react-router-dom";
import Footer from "../componentes/footer/footer";
import Navbar from "../componentes/header/navbar";

const MainLayout = ({marcas}) => {

    return (
        <>
            <Navbar marcas={marcas}/>
    
            <Outlet></Outlet>

            <Footer/>
        </>
    )
}

export default MainLayout

