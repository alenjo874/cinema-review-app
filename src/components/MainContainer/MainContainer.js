import React, { useState, useEffect } from "react";
import MoviesContainer from "./MoviesContainer/MoviesContainer.js";
import GenresContainer from "./GenresContainer/GenresContainer.js";
import MovieReview from "./MovieReview/MovieReview.js";

function MainContainer({
  comments,
  setComments,
  handleDeleteComment,

}) {
  const [genresArray, setGenresArray] = useState([]);
  const [genre, setGenre] = useState("");
  const [moviesArray, setMoviesArray] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState(false);

  const [isGenreClicked, setIsGenreClicked] = useState(false);

  // const [movieReviewForm, setMovieReviewForm] = useState(true);
  const [movieId, setMovieId] = useState("");
  const [movieTitle, setMovieTitle] = useState("");


  useEffect(() => {
    fetch("http://localhost:3000/genres")
      .then((resp) => resp.json())
      .then(setGenresArray);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then(setMoviesArray);
  }, []);

  function onClickDisplayMovies(specificGenre) {
    setGenre(specificGenre);
    setIsGenreClicked(true);
  }

  const filteredMovies = moviesArray.filter((movie) =>
    movie.genres.includes(genre)
  );

  function handleSearchDisplay(title, movieId) {
    setSearchDisplay(true);
    setMovieTitle(title);
    setMovieId(movieId);
  }

  function handleInfoDisplay(id) {
    setMovieId(id);
  }

  function handleUpdateComments(newComment) {
    setComments((comments) => [...comments, newComment]);
  }

  return (
    <main className="main">
      {/* <main className="main"> */}
      <GenresContainer
        genresArray={genresArray}
        onClickDisplayMovies={onClickDisplayMovies}
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
        comments={comments}
        movieId={movieId}
        handleUpdateComments={handleUpdateComments}
      />
    </main>
  );
}

export default MainContainer;
