import React from "react";
import MovieCard from "./MovieCard";
import CommentCard from "../../Comments/CommentCard";
import { v4 as uuidv4 } from "uuid";

function MoviesContainer({
  movieTitle,
  movieId,
  moviesArray,
  comments,
  handleDeleteComment,
}) {
  const movieSelection = moviesArray.filter((movie) => movie.id === movieId);

  const displayMovieCard = movieSelection.map((movie) => {
    return <MovieCard key={uuidv4()} {...movie} />;
  });

  const filteredComments = comments.filter(
    (comment) => comment.movieId === movieId
  );

  const displayComments = filteredComments.map((comment) => {
    return (
      <CommentCard
        key={uuidv4()}
        {...comment}
        handleDeleteComment={handleDeleteComment}
      />
    );
  });

  return (
    <div className="movie-container">
      <div className="movie-header">
        <p className="movie-genre"> {movieTitle}</p>
      </div>
      <div className="card-review-container">
        <div className="card-container"> {displayMovieCard}</div>
        <div className="review-feed-container">{displayComments}</div>
      </div>
    </div>
  );
}

export default MoviesContainer;
