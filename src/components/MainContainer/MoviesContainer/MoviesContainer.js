import React, { useState, useEffect } from "react";
import CommentCard from "../../CommentCard";
import { v4 as uuidv4 } from "uuid";

function MoviesContainer({ isGenreClicked, genre }) {
  return (
    <div className="movie-container">
      <div className="movie-header">
        <h2>Movie Review Selection</h2>
        <p className="movie-genre"> {genre}</p>
      </div>
      <div className="carousel"></div>
    </div>
  );
}

export default MoviesContainer;
