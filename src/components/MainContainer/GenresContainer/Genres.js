import React from "react";
import { motion } from "framer-motion";

function Genres({ title, movieId, onClickDisplayMovies, handleSearchDisplay }) {
  function handleClick() {
    handleSearchDisplay(title, movieId);
  }

  // console.log(movie);

  // whileHover={{
  //   scale: 1.2,
  //   transition: { duration: 0.3 },
  // }}
  // whileTap={{
  //   scale: 0.8,
  //   transition: { duration: 0.3 },
  // }}
  // className="image"
  // id="postimage"
  // initial={{ y: -50, opacity: 0 }}
  // animate={{ y: -10, opacity: 1 }}
  // exit={{ opacity: 0 }}
  // transition={{ type: "spring", stiffness: 200 }}

  return (
    <div>
      {/* <ul className="genre-element" onClick={handleClick}>{genre}</ul> */}
      <motion.ul
        whileHover={{
          scale: 1.25,
          originX: 0,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.9,
          transition: { duration: 0.3 },
        }}
        transition={{ type: "spring", stiffness: 275 }}
        className="genre-element"
        onClick={handleClick}
      >
        {title}
      </motion.ul>
    </div>
  );
}

export default Genres;
