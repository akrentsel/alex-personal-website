import React from "react";

import { Link } from "react-router-dom";

const BriefAboutInsert = () => (
  <section id="sidebar">
    <section id="intro">
      <header>
        <h2>Alex Krentsel</h2>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:alex@krentsel.com"
          >
            alex@krentsel.com
          </a>
        </p>
      </header>
    </section>
    <section>
      <h3>Brief About</h3>

      <Link to="/about" className="button large">
        Read More
      </Link>
    </section>
    <section id="footer">
      <ul className="icons">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/alex-krentsel/"
            className="fab fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/alex.krentsel"
            className="fab fa-facebook-f"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCu1Zgi1SI0rZQW94_OP16NQ"
            className="fab fa-youtube"
          >
            <span className="label">YouTube</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/akrentsel/"
            className="fab fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackoverflow.com/users/4015623/alex-k"
            className="fab fa-stack-overflow"
          >
            <span className="label">StackOverflow</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:alex@krentsel.com"
            className="fas fa-envelope"
          >
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <p className="copyright">
        &copy; Alex Krentsel 2019. CSS from{" "}
        <a href="http://html5up.net">HTML5 UP</a>.
      </p>
    </section>
  </section>
);

export default BriefAboutInsert;
