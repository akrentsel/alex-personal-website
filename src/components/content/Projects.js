import React from "react";
import DocumentTitle from "react-document-title";

import SlashPic from "assets/imgs/slash-image.png";
import ShortlPic from "assets/imgs/shortl-image.png";
import WebsitePic from "assets/imgs/krentsel-website.png";

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
          <h2>www.krentsel.com</h2>
          <time className="published" datetime="2019-08-15">
            June 2019
          </time>
          <p>
            I built this website from scratch to be my presence on the web. It supports web, tablet, and mobile views.{" "}
            I used React for the frontend, and host the static react app on Github. I only reused{" "}
            <a target="_blank" rel="noopener noreferrer" href="http://html5up.net/">CSS from html5up</a>.{" "}
            In 2020 I extended the website, building a blog hosting and serving platform{" "}
            (effectively a CMS) from scratch on AWS. I write my posts in Markdown, add{" "}
            them to my content database, and they get dynamically fetched and rendered on the{" "}
            <a target="_blank" rel="noopener noreferrer" href="/posts">Posts page of my website</a>.
            <br></br><br></br>See if you can find all of the hidden easter eggs!
          </p>
        </header>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/"
          className="image"
        >
          <img height="400" src={WebsitePic} alt="" />
        </a>
      </article>
      <article className="mini-post">
        <header>
          <h2>Shortl.io - Link Shortener</h2>
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
