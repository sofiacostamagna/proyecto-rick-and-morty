import React from "react";
import "./CharacterFilter.css";

const CharacterFilters = ({ filters, setFilters, onFilter }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="character-filters">
      <select
        name="species"
        onChange={handleInputChange}
        value={filters.species}
      >
        <option value="">Selecciona las especie</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alien</option>
        {/* Agrega más opciones según lo que devuelva la API */}
      </select>

      <select name="gender" onChange={handleInputChange} value={filters.gender}>
        <option value="">Selecciona el genero</option>
        <option value="Male">Masculino</option>
        <option value="Female">Femenino</option>
        <option value="Genderless">Sin género</option>
        <option value="unknown">Desconocido</option>
      </select>

      <select name="status" onChange={handleInputChange} value={filters.status}>
        <option value="">Selecciona el estatus</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>

      <button onClick={onFilter} className="btn-filter">
        Filtrar
      </button>
    </div>
  );
};

export default CharacterFilters;
