import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../../styles/HeaderStyles.css';

const HandleSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Buscando:", searchTerm);
    // Lógica para manejar la búsqueda
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <FaSearch
        onClick={handleSearch}
        className="search-icon"
      />
    </div>
  );
};

export default HandleSearch;
