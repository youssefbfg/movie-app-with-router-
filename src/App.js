import React, { useState } from "react";
import { movieData } from "./MovieData";
import "./App.css";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import SearchMovie from "./Components/SearchMovie";
import { Routes, Route } from "react-router-dom";
import DescriptionPage from "./Components/DescriptionPage";

function App() {
  const [movies, setMovies] = useState(movieData);
  const [input, setInput] = useState("");
  const [stars, setStars] = useState(0);
  const AddHandler = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      <SearchMovie setInput={setInput} setStars={setStars} />

      <Routes>
        <Route path="/DescriptionPage/:idMovie" element={<DescriptionPage />} />

        <Route
          index   
          element={<MovieList movies={movies} input={input} stars={stars} />}
        />
      </Routes>
      <AddMovie AddHandler={AddHandler} />
    </div>
  );
}

export default App;
