import React from "react";
import ReactStars from "react-stars";

function SearchMovie({ setInput, setStars }) {
  const ratingChanged = (newRating) => {
    setStars(newRating);
  };
  return (
    <div className="Search">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search"
      />
      <ReactStars
        count={10}
        onChange={ratingChanged}
        size={24}
        color2={"#ffd700"}
      />
    </div>
  );
}

export default SearchMovie;
