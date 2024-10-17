import React, { useState } from "react";
import "./CharacterSearch.css";

const CharacterSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Verifica que el término no esté vacío
      onSearch(searchTerm);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(); // Llama a la búsqueda si se presiona Enter
    }
  };

  return (
    <div className="character-search">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Usa onKeyDown
      />
      <button onClick={handleSearch} className="btn-search">
        Buscar
      </button>
    </div>
  );
};

export default CharacterSearch;
