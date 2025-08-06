import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import api from "./services/api";
import './App.css'
import MainLayout from './layouts/mainLayout';
import Home from './pages/Home/Home';
import QuienesSomos from "./pages/QuienesSomos/QuienesSomos";
import Contacto from "./pages/Contacto/Contacto";
import Productos from "./pages/Productos/Productos";

function App() {

  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    api.get('/products/categories')
      .then((response) => {
        setCategorias(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error al cargar las marcas:', error)
        setLoading(false)
      })

      api.get('/products')
      .then((response) => {
        setProductos(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error al cargar las marcas:', error)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Cargando datos...</p>

  return (
    <>
      <Routes>
          <Route path="/" element={<MainLayout categorias={categorias} />}>
            <Route index element={<Home />}/>
            <Route path="/QuienesSomos" element={<QuienesSomos/> }></Route>
            <Route path="/Contacto" element={<Contacto/> }></Route>
            <Route path="/Productos/:Categoria" element={<Productos productos={productos} categorias={categorias}/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
