import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => (
  <article className="post">
    <header>
      <div className="title">
        <h2>Welcome to my website</h2>
      </div>
    </header>
    <p>
      Thanks for stopping by. This webpage is home to my{" "}
      <Link to="/about">info about me and my life/career timeline</Link>, my{" "}
      <Link to="/posts">miscellaneous musings</Link>,{" "}
      <Link to="/music">violin performance recordings</Link>,{" "}
      <Link to="/teaching">teaching materials I've produced</Link>, past{" "}
      <Link to="/projects">projects I've worked on</Link>, and my{" "}
      <Link to="/contact">contact info</Link>.
    </p>
    <p>Feel free to take a look around!</p>
  </article>
);

// TODO(akrentsel): Link to website source

export default Welcome;
