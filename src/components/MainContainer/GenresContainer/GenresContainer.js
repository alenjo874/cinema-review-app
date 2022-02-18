import React from "react";
import { v4 as uuidv4 } from "uuid";
import Genres from "./Genres";

function GenresContainer({
  onClickDisplayMovies,
  handleSearchDisplay,
  moviesArray,
}) {
  const movieTitleList = moviesArray.map((movie) => (
    <Genres
      title={movie.title}
      movieId={movie.id}
      key={uuidv4()}
      handleSearchDisplay={handleSearchDisplay}
      onClickDisplayMovies={onClickDisplayMovies}
    />
  ));

  return <div className="genres-container">{movieTitleList}</div>;
}

export default GenresContainer;
