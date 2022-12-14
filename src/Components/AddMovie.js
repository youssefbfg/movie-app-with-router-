import React, { useState } from "react";
import ReactModal from "react-modal";

function AddMovie({ AddHandler }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const opened = () => {
    setIsOpen(true);
  };
  const closed = () => {
    setIsOpen(false);
  };
  const addMovie = () => {
    const movie = {
      title,
      poster,
      description,
      rating,
    };
    AddHandler(movie);
    closed();
  };
  return (
    <div>
      <button className="AddMovie" onClick={opened}>
        Add Movie{" "}
      </button>
      <ReactModal isOpen={modalIsOpen}>
        <div>
          <label type="text">Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label type="text">Poster</label>
          <input type="text" onChange={(e) => setPoster(e.target.value)} />
        </div>
        <div>
          <label type="text">Description</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label type="text">Rating</label>
          <input type="number" onChange={(e) => setRating(e.target.value)} />
        </div>
        <button className="Close" onClick={closed}>
          Close
        </button>
        <button className="Submit" onClick={addMovie}>
          Submit
        </button>
      </ReactModal>
    </div>
  );
}

export default AddMovie;
