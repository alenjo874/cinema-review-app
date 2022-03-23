import React from "react";

function MovieCard({
  year,
  runtime,
  genres,
  director,
  actors,
  plot,
  posterUrl,
}) {
  return (
    <div className="movie-card">
      <div className="review-img-container">
        <img src={posterUrl} alt="" className="review-img"></img>
      </div>
      <div className="review-info-container">
        <p className="review-info-element">
          {genres.join(" ")} | {year} | {runtime} minutes
        </p>
        <p className="review-info-element">
          <b>Director:</b> {director}
        </p>
        <p className="review-info-element">
          <b>Actors: </b>
          {actors}
        </p>

        <p className="review-info-element">
          <em>{plot}</em>
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
