// Importar las dependencias necesarias
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

// Crear el nodo raíz de la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar el componente principal de la aplicación dentro de React.StrictMode y BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
