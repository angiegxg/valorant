// Importar las dependencias necesarias
import React from 'react';
import '../search/Search.modules.css';

// Definir el componente FilterRole
function FilterRole({ onRoleChange }) {
  // Roles disponibles
  const role = ['All Role', 'Initiator', 'Sentinel', 'Duelist', 'Controller'];

  // Función para manejar el cambio de rol seleccionado
  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    onRoleChange(selectedRole); // Llama a la función para manejar el cambio del rol
  };

  return (
    <select className='input-search' onChange={handleRoleChange}>
      {/* Opciones de filtro por rol */}
      {role.map((role, index) => (
        <option key={index} value={role}>
          {role}
        </option>
      ))}
    </select>
  );
}

export default FilterRole;
