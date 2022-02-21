import React from "react";
import { motion } from "framer-motion";

function Genres({ title, movieId, onClickDisplayMovies, handleSearchDisplay }) {
  function handleClick() {
    handleSearchDisplay(title, movieId);
  }

  return (
    <div>
      <motion.ul
        whileHover={{
          scale: 1.25,
          originX: 0,
          transition: { duration: 0.3 },
          color: "white",
        }}
        whileTap={{
          scale: 0.9,
          transition: { duration: 0.3 },
          color: "darkgray",
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
