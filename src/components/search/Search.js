// Importar las dependencias necesarias
import React, { useState } from 'react';
import './Search.modules.css';

// Definir el componente Search
function Search({ onSearch }) {
  // Estado local para mantener el texto de búsqueda
  const [uuid, setUuid] = useState('');

  // Función para manejar el cambio del texto de búsqueda
  const changeHandler = (e) => {
    e.preventDefault();
    let input = e.target.value;
    setUuid(input);
  };

  // Función para manejar la búsqueda al hacer clic en el botón
  const handleClick = () => {
    onSearch(uuid);
  };

  return (
    <div>
      <div className='search-box'>
        {/* Botón de búsqueda */}
        <button className='btn-search' onClick={handleClick}>
          {/* Ícono de búsqueda */}
          <svg width='20' height='61' viewBox='0 0 70 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='28' cy='28' r='25.5' stroke='#FFFEFE' strokeWidth='5' />
            <line x1='48.0759' y1='41.3851' x2='66.4089' y2='57.0025' stroke='#FFFEFE' strokeWidth='10' />
          </svg>
        </button>
        {/* Barra de búsqueda */}
        <input
          type='text'
          className='input-search'
          placeholder='Escribe para buscar...'
          onChange={changeHandler}
          value={uuid}
        />
      </div>
    </div>
  );
}

export default Search;
