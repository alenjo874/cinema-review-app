import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import HomeCard from "./HomeCard";
import { motion } from "framer-motion";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function HomeContainer({ handleHomeClick, setNewMovieObj }) {
  const [moviesArray, setMoviesArray] = useState([]);
  const [search, setSearch] = useState("");
  const [isAddClicked, setIsAddClicked] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then(setMoviesArray);
  }, []);

  const filterTitles = moviesArray.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie.director.toLowerCase().includes(search.toLowerCase()) ||
      movie.actors.toLowerCase().includes(search.toLowerCase()) ||
      movie.genres.join(" ").toLowerCase().includes(search.toLowerCase())
    );
  });

  const displayTitles = filterTitles.map((movie) => {
    return <HomeCard key={uuidv4()} {...movie} />;
  });

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [runtime, setRuntime] = useState("");
  const [genres, setGenres] = useState([]);
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [plot, setPlot] = useState("");
  const [posterUrl, setPosterUrl] = useState("");

  const newMovieForm = (
    <motion.form
      className="movie-form-container"
      initial={{ y: -30 }}
      animate={{ y: -15 }}
      transition={{ type: "spring", stiffness: 250 }}
      onSubmit={handleNewMovie}
    >
      <div className="movie-form">
        <label>Movie Title</label>
        <input
          className="search addmovie"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
        <label>Year</label>
        <input
          className="search addmovie"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        ></input>
        <label>Runtime</label>
        <input
          className="search addmovie"
          onChange={(e) => setRuntime(e.target.value)}
          value={runtime}
        ></input>
        <label>Genres</label>
        <input
          className="search addmovie"
          onChange={(e) => setGenres(e.target.value)}
          value={genres}
        ></input>
      </div>
      <div className="movie-form">
        <label>Director</label>
        <input
          className="search addmovie"
          onChange={(e) => setDirector(e.target.value)}
          value={director}
        ></input>
        <label>Actors</label>
        <input
          className="search addmovie"
          onChange={(e) => setActors(e.target.value)}
          value={actors}
        ></input>
        <label>Plot</label>
        <input
          className="search addmovie"
          onChange={(e) => setPlot(e.target.value)}
          value={plot}
        ></input>
        <label>Movie Poster</label>
        <input
          className="search addmovie"
          onChange={(e) => setPosterUrl(e.target.value)}
          value={posterUrl}
        ></input>
        <div>
          <button className="btn-style" type="submit">
            New Movie
          </button>
        </div>
      </div>
    </motion.form>
  );

  const movieCardDisplay = (
    <motion.div
      className="home-movie-container"
      initial={{ y: -40 }}
      animate={{ y: -15 }}
      transition={{ type: "spring", stiffness: 250 }}
    >
      {displayTitles}
    </motion.div>
  );

  function handleClick() {
    setIsAddClicked((prev) => !prev);
  }

  function handleNewMovie(e) {
    e.preventDefault();

    const movieObj = {
      title,
      year,
      runtime,
      genres,
      director,
      actors,
      plot,
      posterUrl,
    };

    setNewMovieObj(movieObj);

    fetch("http://localhost:3000/movies", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
    setTitle("");
    setYear("");
    setRuntime("");
    setGenres("");
    setDirector("");
    setActors("");
    setPlot("");
    setPosterUrl("");
    setIsAddClicked(false);
  }

  return (
    <div className="home-container">
      <motion.form
        className="home-search"
        initial={{ y: -60 }}
        animate={{ y: -15 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search by Title, Director, Genre"
          className="search text-center"
        ></input>
      </motion.form>

      <button className="btn-style" onClick={handleClick}>
        +Add Movie
      </button>
      {isAddClicked ? newMovieForm : null}
      {isAddClicked ? null : movieCardDisplay}
    </div>
  );
}

export default HomeContainer;
