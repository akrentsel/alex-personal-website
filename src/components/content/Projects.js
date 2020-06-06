import React from "react";
import DocumentTitle from "react-document-title";

import SlashPic from "assets/imgs/slash-image.png";
import ShortlPic from "assets/imgs/shortl-image.png";

const Projects = () => (
  <DocumentTitle title="Projects">
    <article className="post">
      <header>
        <div className="title">
          <h2>Projects</h2>
        </div>
      </header>
      <p>
        I've occasionally made programs/tools to make life easier for myself or
        to learn something new. Below is a selection of some of them.
      </p>
      <article className="mini-post">
        <header>
          <h2>Shortl - Link Shortener</h2>
          <time className="published" datetime="2020-05-20">
            May 2020
          </time>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.shortl.io/"
            >
              Shortl
            </a>{" "}
            is your standard link shortener, taking in a long URL and allowing
            you to either specify a custom "shortl" that is easy to remember, or
            generating a random "shortl" that is short and easy to type. It is
            built with MongoDB for its database, Express and NodeJS for its
            backend, and React for the frontend, with Socket.io for
            communication with the backend.
          </p>
        </header>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.shortl.io/"
          className="image"
        >
          <img height="400" src={ShortlPic} alt="" />
        </a>
      </article>
      <article className="mini-post">
        <header>
          <h2>Slash Searchbar Shortcuts</h2>
          <time className="published" datetime="2017-01-15">
            January 2017
          </time>
          <p>
            Slash allows you to add custom shortcuts to your searchbar, such as{" "}
            <code>m/</code> for mail and <code>c/</code> for calendar, speeding
            up your navigation online. It also comes with more complicated
            shortcuts for searching information, such as{" "}
            <code>where/&lt;location_name&gt;</code> (location_name will be
            shown on Google maps) and <code>who/&lt;name&gt;</code> (searches
            for name on Facebook), among others. You can download it on the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://chrome.google.com/webstore/detail/slash-searchbar-shortcuts/hfdmjgkekkjdpabmbpjbpeijfhfdeacp"
            >
              Chrome Web Store
            </a>
            .
          </p>
        </header>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://chrome.google.com/webstore/detail/slash-searchbar-shortcuts/hfdmjgkekkjdpabmbpjbpeijfhfdeacp"
          className="image"
        >
          <img height="400" src={SlashPic} alt="" />
        </a>
      </article>
    </article>
  </DocumentTitle>
);

export default Projects;
