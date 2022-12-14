import React from "react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

function MovieCard({ film }) {
  return (
    <div className="Movies">
      <Link to={`/DescriptionPage/${film.id}`}>
        <h3 className="Title">{film.title}</h3>
      </Link>
      <img className="before" src={film.poster} alt={film.title} />

      <ReactStars
        count={10}
        size={24}
        value={film.rating}
        edit={false}
        color2={"#ffd700"}
      />
    </div>
  );
}

export default MovieCard;
