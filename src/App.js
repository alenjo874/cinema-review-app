import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/Header/NavBar.js";
import Footer from "./components/FooterContainer/Footer";
import ProfileContainer from "./components/MainContainer/ProfileContainer/ProfileContainer.js";
import { Route, Switch } from "react-router-dom";
import MainContainer from "./components/MainContainer/MainContainer";
import HomeContainer from "./components/HomeContainer/HomeContainer";

function App() {
  const [comments, setComments] = useState([]);
  const [newMovieObj, setNewMovieObj] = useState({});
  const [moviesArray, setMoviesArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then(setMoviesArray);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((resp) => resp.json())
      .then(setComments);
  }, []);

  function handleDeleteComment(id) {
    const filteredComments = comments.filter((comment) => comment.id !== id);
    setComments(filteredComments);
    fetch(`http://localhost:3000/comments/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div className="App">
      <NavBar />
      <div className="body-container">
        <Switch>
          <Route exact path="/">
            <HomeContainer
              setNewMovieObj={setNewMovieObj}
              setMoviesArray={setMoviesArray}
              moviesArray={moviesArray}
            />
          </Route>
          <Route exact path="/review">
            <MainContainer
              comments={comments}
              setComments={setComments}
              handleDeleteComment={handleDeleteComment}
              newMovieObj={newMovieObj}
              setMoviesArray={setMoviesArray}
              moviesArray={moviesArray}
            />
          </Route>
          <Route exact path="/profile">
            <ProfileContainer
              comments={comments}
              handleDeleteComment={handleDeleteComment}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
