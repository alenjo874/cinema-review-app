import React, { useState } from "react";
import CommentCard from "../CommentCard";
import { v4 as uuidv4 } from "uuid";
import dogcritic from "../MainContainer/images/dogcritic.jpeg"

function ProfileContainer({ comments, handleDeleteComment }) {
  const commentList = comments.map((comment) => (
    <CommentCard
      key={uuidv4()}
      {...comment}
      handleDeleteComment={handleDeleteComment}
    />
  ));

  return (
    <div className="profile-container">
      <div className="profile-information">
     
        <div className="profile-details">
          <h2>Luke Skybarker</h2>
        </div>
        <div className="profile-picture">
          <img src={dogcritic} className="pro-pic"></img>
          <p>Joined: February 2022</p>
        </div>
        
        <div className="profile-details">
          <div>
          <h4 className="profile-element">About Me</h4>
          <p className="profile-about">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.
          </p>
          </div>
          <div className="favorites-container">
          <h4 className="profile-element">My Top Five Movies</h4>
          <li>
            <ul>Shrek</ul>
            <ul>Inception</ul>
            <ul>Social Network</ul>
            <ul>Pulp Fiction</ul>
            <ul>Looper</ul>
          </li>
        </div>
        </div>
      </div>
      <div className="content-container">
      <h4 className="movie-header">Comment History</h4>
        <div className="comments-container">
          {commentList}
          </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
