import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MovieCard from "./MovieCard";
import CommentCard from "../../CommentCard";
import { v4 as uuidv4 } from "uuid";

function MoviesContainer({
  isGenreClicked,
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


  let firstMovie = []

  firstMovie.push(moviesArray[0])

 const firstMovieCard = firstMovie.map(movie => {
   return (
    <MovieCard key={uuidv4()} {...movie} />
   )
 })


  

  return (
    <div className="movie-container">
      <div className="movie-header">
        <p className="movie-genre"> { movieTitle }</p>
      </div>
      <div className="card-review-container">
        <div className="card-container"> {displayMovieCard}</div>
        <div className="review-feed-container">
          {displayComments}
        </div>
      </div>
    </div>
  );
}

export default MoviesContainer;
