// src/services/rickAndMortyApi.js
import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character";

// Función unificada para obtener personajes, con soporte para filtros opcionales
export const getAllCharacters = async (filters = {}) => {
  try {
    // Convertimos los filtros en parámetros de consulta
    const params = new URLSearchParams(filters).toString();
    const response = await axios.get(`${API_URL}?${params}`);
    return response.data; // Retornamos los datos de la respuesta
  } catch (error) {
    // Manejo de errores
    console.error("Error fetching characters:", error);
    throw new Error("Error fetching characters");
  }
};
