// src/components/CharacterList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCharacters } from "../../services/rickAndMortyApi";
import "./CharacterList.css";
import CharacterFilter from "../CharactersFilter/CharacterFilter";
import CharacterSearch from "../CharacterSearch/CharacterSearch";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    species: "",
    gender: "",
    status: "",
    name: "",
  });
  const [favorites, setFavorites] = useState([]); // Cambiado a un array
  const [showFavorites, setShowFavorites] = useState(false);

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const data = await getAllCharacters(filters);
      setCharacters(data.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      name: searchTerm,
    }));
    fetchCharacters();
  };

  const applyFilters = () => {
    fetchCharacters();
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const toggleFavorite = (character) => {
    if (favorites.some((fav) => fav.id === character.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== character.id)); // Desactivar
    } else {
      setFavorites([...favorites, character]); // Activar
    }
  };

  const toggleShowFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Filtrar personajes para mostrar
  const displayedCharacters = showFavorites ? favorites : characters;

  return (
    <div>
      <div className="character-controls">
        <CharacterSearch onSearch={handleSearch} className="character-search" />
        <CharacterFilter
          filters={filters}
          setFilters={setFilters}
          onFilter={applyFilters}
          className="character-filters"
        />
        {/* Botón para mostrar/ocultar favoritos */}
        <button onClick={toggleShowFavorites} className="btn-toggle-favorites">
          {showFavorites ? "Mostrar Todos" : "Mostrar Favoritos"}
        </button>
      </div>

      <div className="character-list">
        {displayedCharacters.map((character) => (
          <div className="character-card" key={character.id}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <Link to={`/character/${character.id}`}>
              <button className="btn-more">Ver más</button>
            </Link>
            <button
              onClick={() => toggleFavorite(character)}
              className="btn-favorite"
            >
              {favorites.some((fav) => fav.id === character.id) ? "❤️ " : "🤍 "}{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
