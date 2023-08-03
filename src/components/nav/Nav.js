// Importar las dependencias necesarias
import React from 'react';
import Search from '../search/Search';
import FilterRole from '../Filter/FilterRole';
import './Nav.modules.css';

// Definir el componente Nav
function Nav({ onSearch, onRoleChange }) {
  return (
    <div className='nav'>
      {/* Logo */}
      <img
        className='logo'
        src='https://freelogopng.com/images/all_img/1664302589valorant-logo-png-white.png'
        alt='Valorant Logo'
      />
      {/* Componente de búsqueda */}
      <Search onSearch={onSearch} />
      {/* Componente de filtro por rol */}
      <FilterRole onRoleChange={onRoleChange} />
    </div>
  );
}

export default Nav;
