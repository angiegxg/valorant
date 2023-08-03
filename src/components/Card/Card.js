// Importar las dependencias necesarias
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.modules.css';

// Definir el componente Card
function Card({ character, closeHandler }) {
  // Estilo de fondo para la tarjeta utilizando gradientes
  const cardStyle = {
    backgroundImage: `linear-gradient(135deg, #${character.backgroundGradientColors[0]}, #${character.backgroundGradientColors[1]}, #${character.backgroundGradientColors[2]}, #${character.backgroundGradientColors[3]})`,
  };

  // Función para manejar el clic en la "x" para cerrar el agente
  const handleClick = () => {
    closeHandler(character.uuid);
  };

  // Función para navegar a la vista detallada del agente
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`/detail/${character.uuid}`);
  };

  // Evento para cerrar la tarjeta cuando se hace clic en la "x"
  const handleButtonClick = (e) => {
    e.stopPropagation(); // Evitar que el evento se propague al contenedor de la tarjeta
    handleClick(); // Llamar al manejador del evento del botón "x"
  };

  return (
    <div className='card' style={cardStyle} onClick={navigateHandler}>
      {/* Botón "x" para cerrar la tarjeta */}
      <button onClick={handleButtonClick} className='close'>
        x
      </button>
      {/* Información del agente en la tarjeta */}
      <h2>{character.displayName}</h2>
      <img src={character.displayIcon} alt={character.displayName} />
      <p> {character.role?.displayName} </p>
    </div>
  );
}

export default Card;
