import React from "react";
import { Link } from "react-router-dom";
import PostList from "components/blog/PostList.js";

const Welcome = () => (
  <article className="post">
    <header>
      <div className="title">
        <h2>Welcome to my website</h2>
      </div>
    </header>
    <p>Thanks for stopping by internet home. Take a look around, or check out some of my featured posts below:</p>
    <PostList featured/>
  </article>
);

// TODO(akrentsel): Link to website source

export default Welcome;
