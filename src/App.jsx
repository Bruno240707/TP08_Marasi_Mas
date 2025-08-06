import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import api from "./services/api";
import './App.css'
import MainLayout from './layouts/mainLayout';
import Home from './pages/Home/Home';
import QuienesSomos from "./pages/QuienesSomos/QuienesSomos";
import Contacto from "./pages/Contacto/Contacto";

function App() {

  const [marcas, setMarcas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/products/categories')
      .then((response) => {
        setMarcas(response.data)
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
          <Route path="/" element={<MainLayout marcas={marcas} />}>
            <Route index element={<Home />}/>
            <Route path="/QuienesSomos" element={<QuienesSomos/> }></Route>
            <Route path="/Contacto" element={<Contacto/> }></Route>
          </Route>
      </Routes>
    </>
  )
}

export default App
