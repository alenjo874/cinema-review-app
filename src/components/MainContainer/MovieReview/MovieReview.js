import React, { useState } from "react";
import { motion } from "framer-motion";

function MovieReview({ handleUpdateComments, moviesArray }) {
  const [reviewTitleInput, setReviewTitleInput] = useState("");
  const [reviewFormInput, setReviewFormInput] = useState("");

  function handleSubmitReview(e) {
    e.preventDefault();
    const filteredMovieObj = moviesArray.filter(
      (movie) => movie.title.toLowerCase() === reviewTitleInput.toLowerCase()
    );

    const newComment = {
      comment: reviewFormInput,
      movieTitle: filteredMovieObj[0]["title"],
      movieId: filteredMovieObj[0]["id"],
    };
    handleUpdateComments(newComment);
    fetch("https://json-server-cinema-reviews.herokuapp.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });

    setReviewTitleInput("");
    setReviewFormInput("");
  }

  return (
    <div className="comment-container">
      <motion.form
        onSubmit={handleSubmitReview}
        className="comment-form"
        initial={{ y: -60 }}
        animate={{ y: -15 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <h3 className="comment-element">Review Form</h3>
        <label className="comment-element">Title:</label>
        <input
          className="search comment-element"
          type="text"
          value={reviewTitleInput}
          onChange={(e) => setReviewTitleInput(e.target.value)}
          placeholder="Movie Title"
        ></input>
        <label className="comment-element">Review:</label>
        <textarea
          className="review-input comment-element"
          type="text"
          rows="6"
          cols="50"
          value={reviewFormInput}
          onChange={(e) => setReviewFormInput(e.target.value)}
          placeholder="Let us know how you felt!"
        ></textarea>
        <button className="btn-style">Submit!</button>
      </motion.form>
    </div>
  );
}

export default MovieReview;
