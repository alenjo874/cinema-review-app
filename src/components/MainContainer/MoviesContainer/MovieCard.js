import React from "react";

function MovieCard({
  id,
  title,
  year,
  runtime,
  genres,
  director,
  actors,
  plot,
  posterUrl,
  handleInfoDisplay,
}) {
  return (
    <div className="movie-card" onClick={() => handleInfoDisplay(id)}>
      <div className="review-img-container">
        <img src={posterUrl} alt="" className="review-img"></img>
      </div>
      <div className="review-info-container">
        <p className="review-info-element">
          {genres.join(" ")} {year}
        </p>
        <p className="review-info-element">Director: {director}</p>
        <p className="review-info-element">Actors: {actors}</p>
        <p className="review-info-element">Runtime: {runtime} minutes</p>
        <p className="review-info-element">{plot}</p>
      </div>
    </div>
  );
}

export default MovieCard;
