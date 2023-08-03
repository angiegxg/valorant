// Importar las dependencias necesarias
import React from 'react';
import Card from '../Card/Card';
import './CardList.modules.css';

// Definir el componente CardList
function CardList({ characters, closeHandler, role }) {
  // Filtrar los agentes por el rol seleccionado
  let characterAviable = [...characters];
  if (role !== 'All Role') {
    characterAviable = characterAviable.filter((character) => character.role?.displayName === role);
  }

  return (
    <div className='wrap'>
      {/* Mostrar la lista de tarjetas de agentes */}
      {characterAviable.map((character) => (
        <Card key={character.uuid} character={character} closeHandler={closeHandler} />
      ))}
    </div>
  );
}

export default CardList;
