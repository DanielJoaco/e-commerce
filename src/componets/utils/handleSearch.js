import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importa el ícono de lupa desde react-icons

const HandleSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Buscando:", searchTerm);
    // Aquí puedes agregar la lógica para manejar la búsqueda
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={styles.input}
      />
      <FaSearch
        onClick={handleSearch}
        style={styles.icon}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '2.5rem',
    width: '30rem',
  },
  input: {
    border: 'none',
    outline: 'none',
    flex: 1,
    padding: '.8rem',
    borderRadius: '2.0rem',
    fontSize: '1.6rem',
  },
  icon: {
    cursor: 'pointer',
    fontSize: '2.0rem',
    marginLeft: '1.0rem',
    color: '#561290',
  },
};

export default HandleSearch;
