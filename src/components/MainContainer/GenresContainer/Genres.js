import React from "react";
import { motion } from "framer-motion";

function Genres({ title, movieId, handleSearchDisplay }) {
  function handleClick() {
    handleSearchDisplay(title, movieId);
  }

  return (
    <div>
      <motion.ul
        whileHover={{
          scale: 1.15,

          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 1,
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
