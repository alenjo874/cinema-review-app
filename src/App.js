import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar.js";
import ProfileContainer from "./components/MainContainer/ProfileContainer";
import { Routes, Route, Link, Switch } from "react-router-dom";
import MainContainer from "./components/MainContainer/MainContainer";
import HomeContainer from "./components/HomeContainer";

function App() {
  const [comments, setComments] = useState([]);
  const [homeMovieId, setHomeMovieId] = useState("");
  const [newMovieObj, setNewMovieObj] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((resp) => resp.json())
      .then(setComments);
  }, []);

  function handleDeleteComment(id) {
    //Update State
    const filteredComments = comments.filter((comment) => comment.id !== id);
    setComments(filteredComments);
    //Update DB
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
            <HomeContainer setNewMovieObj={setNewMovieObj} />
          </Route>
          <Route exact path="/review">
            <MainContainer
              comments={comments}
              setComments={setComments}
              handleDeleteComment={handleDeleteComment}
          
            />
          </Route>
          <Route exact path="/profile">
            <ProfileContainer
              comments={comments}
              handleDeleteComment={handleDeleteComment}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
