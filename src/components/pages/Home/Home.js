// Importar las dependencias necesarias
import React from 'react';
import Nav from '../../nav/Nav';
import CardList from '../../CardList/CardList';
import './Home.modules.css';

// Definir el componente Home
function Home() {
  // Estados locales para mantener la lista de agentes, el rol seleccionado y la lista original de agentes
  const [characters, setCharacters] = React.useState([]);
  const [selectedRole, setSelectedRole] = React.useState('All Role');
  const [originalCharacters, setOriginalCharacters] = React.useState([]);

  // Llamada a la API para obtener los datos de los agentes al cargar la página
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();
        setCharacters(data.data);
        setOriginalCharacters(data.data); // Guardar una copia del estado original
      } catch (error) {
        // Manejo de errores
      }
    };

    fetchData();
  }, []);

  // Función para filtrar la lista de agentes según el texto de búsqueda
  const searchHandler = (searchText) => {
    const filteredCharacters = originalCharacters.filter((character) =>
      character.displayName.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredCharacters.length === 0) {
      alert('Personaje no encontrado');
    }
    setCharacters(filteredCharacters);
  };

  // Función para manejar el cambio de rol seleccionado
  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  // Función para cerrar un agente y eliminarlo de la lista
  const closeHandler = (uuid) => {
    let remove = characters.filter((character) => character.uuid !== uuid);
    setCharacters(remove);
  };

  return (
    <div>
      {/* Componente de navegación con búsqueda y filtro por rol */}
      <Nav onSearch={searchHandler} onRoleChange={handleRoleChange} />
      <div className='background'>
        <div className='container'>
          {/* Componente que muestra la lista de agentes */}
          <CardList characters={characters} closeHandler={closeHandler} role={selectedRole} />
        </div>
      </div>
    </div>
  );
}

export default Home;
