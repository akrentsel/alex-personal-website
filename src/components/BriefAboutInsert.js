import React from 'react';

import NormalPic from 'assets/imgs/alex-normal.jpg';
import NaturePic from 'assets/imgs/alex-nature.jpg';
import SillyPic from 'assets/imgs/alex-silly.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ToggleImage from './ToggleImage.js';

// TODO(akrentsel): Make the Read More button scroll to the top!
const BriefAboutInsert = () => (
  <section id="sidebar">
      <section id="intro">
        <ToggleImage defaultImage={NormalPic} clickedImage={SillyPic} mouseOverImage={NaturePic}/>
        <header>
          <h2>Alex Krentsel</h2>
          <p><a target="_blank" rel="noopener noreferrer" href="mailto:alex@krentsel.com">alex@krentsel.com</a></p>
        </header>
      </section>
      <section>
        <h3>Brief About</h3>
        <p>Hi! I'm Alex. I graduated from UC Berkeley with a B.S. in EECS and a B.A. in Music. I work as a Software Engineer at <a href="https://www.youtube.com/">YouTube</a>. I enjoy traveling, playing violin, and teaching.</p>

        <Link to="/about/" className="button large">Read More</Link>
      </section>
      <section id="footer">
        <ul className="icons">
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alex-krentsel/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/alex.krentsel" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/akrentsel/" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="mailto:alex@krentsel.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
        </ul>
        <p className="copyright">&copy; Alex Krentsel 2019. Design based on <a href="http://html5up.net">HTML5 UP</a> and <a href="https://mldangelo.com/">https://mldangelo.com/</a>.</p>
      </section>
  </section>
);

export default BriefAboutInsert;
