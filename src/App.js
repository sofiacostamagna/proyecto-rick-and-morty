import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterList from "./components/CharacterList/CharacterList";
import CharacterDetail from "./components/CharacterDetails/CharacterDetails";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setCharacters(response.data.results);
    };

    fetchCharacters();
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Rick and Morty </h1>
      </header>
      <main>
        <Router>
          <div className="app-container">
            <Routes>
              <Route
                path="/"
                element={<CharacterList characters={characters} />}
              />
              <Route
                path="/character/:id"
                element={<CharacterDetail characters={characters} />}
              />
            </Routes>
          </div>
        </Router>
      </main>
      <footer>
        <p>© 2024 Your Name</p>
      </footer>
    </div>
  );
};

export default App;
