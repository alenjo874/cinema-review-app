import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import Genres from "./Genres";
import { motion } from "framer-motion";

function GenresContainer({
  handleSearchDisplay,
  moviesArray,
}) {

 
  const [titleSearch, setTitleSearch] = useState("")

  function handleSearch(e) {
    setTitleSearch(e.target.value);
  }


  const movieTitleArray = moviesArray.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleSearch.toLowerCase())
    )
  })

  const movieTitleList = movieTitleArray.map((movie) => (
    <Genres
      title={movie.title}
      movieId={movie.id}
      key={uuidv4()}
      handleSearchDisplay={handleSearchDisplay}
    />
  ));

  return(
    <div className="genres-search-container"> 
      <motion.form
        className="title-search"
        initial={{ y: -60 }}
        animate={{ y: -15 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <input
          type="text"
          value={titleSearch}
          onChange={handleSearch}
          placeholder="Search by Movie Title"
          className="search text-center"
        ></input>
      </motion.form>
     <div className="genres-container">{movieTitleList}</div>
     </div>
     )
}

export default GenresContainer;
