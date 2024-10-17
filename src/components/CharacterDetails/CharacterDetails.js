// src/components/CharacterDetail.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./CharacterDetails.css";

const CharacterDetail = ({ characters }) => {
  const { id } = useParams(); // Obtiene el ID del personaje desde la URL
  const character = characters.find((char) => char.id === parseInt(id)); // Busca el personaje por ID

  if (!character) {
    return <p>Personaje no encontrado</p>;
  }

  return (
    <div className="character-detail-container">
      <div className="character-detail-content">
        <img
          src={character.image}
          alt={character.name}
          className="character-image"
        />
        <div className="character-info">
          <h2>{character.name}</h2>
          <p>
            <strong>Especie:</strong> {character.species}
          </p>
          <p>
            <strong>Género:</strong> {character.gender}
          </p>
          <p>
            <strong>Origen:</strong> {character.origin.name}
          </p>
          <p>
            <strong>Estado:</strong> {character.status}
          </p>

          <Link to="/">
            <button className="btn-back">Volver</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
