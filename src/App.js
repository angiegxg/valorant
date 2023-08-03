// Importar las dependencias necesarias
import React from 'react';
import './App.css';
import Home from './components/pages/Home/Home';
import Detail from './components/pages/Detail/Detail';
import { Route, Routes } from 'react-router-dom';

// Definir el componente principal de la aplicación
function App() {
  return (
    <div>
      {/* Configurar las rutas y asociar cada ruta con su componente correspondiente */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:uuid' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
