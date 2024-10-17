// src/components/CharacterSearch.js
import React, { useEffect, useState } from "react";
import "./CharacterSearch.css";

const CharacterSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm); // Llama a onSearch solo si searchTerm no está vacío
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(); // Ejecuta la búsqueda al presionar Enter
    }
  };

  useEffect(() => {
    // Esto se llamará cada vez que searchTerm cambie
    if (searchTerm.trim()) {
      onSearch(searchTerm); // Busca automáticamente cuando se cambia el término de búsqueda
    }
  }, [searchTerm, onSearch]);

  return (
    <div className="character-search">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Detecta cuando se presiona la tecla Enter
      />
      <button onClick={handleSearch} className="btn-search">
        Buscar
      </button>
    </div>
  );
};

export default CharacterSearch;
