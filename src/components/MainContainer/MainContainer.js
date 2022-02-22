import React, { useState, useEffect } from "react";
import MoviesContainer from "./MoviesContainer/MoviesContainer.js";
import GenresContainer from "./GenresContainer/GenresContainer.js";
import MovieReview from "./MovieReview/MovieReview.js";

function MainContainer({
  comments,
  setComments,
  handleDeleteComment,
  moviesArray,
}) {
  const [movieId, setMovieId] = useState("");
  const [movieTitle, setMovieTitle] = useState("");

  function handleSearchDisplay(title, movieId) {
    setMovieTitle(title);
    setMovieId(movieId);
  }

  function handleUpdateComments(newComment) {
    setComments((comments) => [...comments, newComment]);
  }

  return (
    <main className="main">
      <div className="movie-review-header">
        <h2>Movie Review Selection</h2>
      </div>
      <div className="main-review-container">
        <GenresContainer
          handleSearchDisplay={handleSearchDisplay}
          moviesArray={moviesArray}
        />
        <MoviesContainer
          movieTitle={movieTitle}
          movieId={movieId}
          moviesArray={moviesArray}
          comments={comments}
          handleDeleteComment={handleDeleteComment}
        />
        <MovieReview
          moviesArray={moviesArray}
          handleUpdateComments={handleUpdateComments}
        />
      </div>
    </main>
  );
}

export default MainContainer;
