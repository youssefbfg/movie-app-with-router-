import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { movieData } from "../MovieData";
import { useParams } from "react-router-dom";

function DescriptionPage() {
  const { idMovie } = useParams();
  const navigate = useNavigate();
  return (
    <div className="DescPage">
      <h1>{movieData.find((movie) => movie.id === Number(idMovie)).title}</h1>
      <img
        className="after"
        src={movieData.find((movie) => movie.id === Number(idMovie)).poster}
        alt={idMovie.poster}
      />
      <h3>
        {movieData.find((movie) => movie.id === Number(idMovie)).description}
      </h3>

      <a
        className="Link"
        href={movieData.find((movie) => movie.id === Number(idMovie)).trailer}
      >
        Trailer
      </a>
      <Link to={navigate("/")}>
        <p className="Link">home page</p>
      </Link>
    </div>
  );
}

export default DescriptionPage;
