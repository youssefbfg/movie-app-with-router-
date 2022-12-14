import React from "react";

import MovieCard from "./MovieCard";

function MovieList({ movies, input, stars }) {
  return (
    <div className="test">
      {movies
        .filter(
          (film) =>
            film.title.toLowerCase().includes(input.toLowerCase().trim()) &&
            film.rating >= stars
        )
        .map((film) => (
          <MovieCard film={film} />
        ))}
    </div>
  );
}

export default MovieList;
