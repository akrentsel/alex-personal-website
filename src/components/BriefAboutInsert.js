import React from 'react';

import NormalPic from 'assets/imgs/alex-normal.jpg';
import NaturePic from 'assets/imgs/alex-nature.jpg';
import SillyPic from 'assets/imgs/alex-silly.jpg';
import { Link } from "react-router-dom";

import ToggleImage from './ToggleImage.js';

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
        <p>Hi! I'm Alex. I graduated from UC Berkeley with a B.S. in EECS and a B.A. in Music.
        I work as a Software Engineer at <a target="_blank" href="https://www.youtube.com/">YouTube</a>.
        I enjoy traveling, playing violin, and teaching.
        I've previously worked at <a target="_blank" href="https://ads.google.com/">Google (Ads)</a>, <a target="_blank" href="https://www.facebook.com/">Facebook</a>, and <a target="_blank" href="https://www.interapt.com/">Interapt</a>.</p>

        <Link to="/about/" className="button large">Read More</Link>

      </section>
      <section id="footer">
        <ul className="icons">
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alex-krentsel/" className="fab fa-linkedin"><span className="label">LinkedIn</span></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/alex.krentsel" className="fab fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCu1Zgi1SI0rZQW94_OP16NQ" className="fab fa-youtube"><span className="label">YouTube</span></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/akrentsel/" className="fab fa-github"><span className="label">GitHub</span></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/4015623/alex-k" className="fab fa-stack-overflow"><span className="label">StackOverflow</span></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="mailto:alex@krentsel.com" className="fas fa-envelope"><span className="label">Email</span></a></li>
        </ul>
        <p className="copyright">&copy; Alex Krentsel 2019. Design based on <a href="http://html5up.net">HTML5 UP</a> and <a href="https://mldangelo.com/">https://mldangelo.com/</a>.</p>
      </section>
  </section>
);

export default BriefAboutInsert;
