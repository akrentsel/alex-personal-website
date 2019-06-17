import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from './components/NavBar.js';
import About from './components/content/About.js';
import Music from './components/content/Music.js';
import Projects from './components/content/Projects.js';
import Contact from './components/content/Contact.js';
import BriefAboutInsert from './components/BriefAboutInsert.js';

function AppRouter() {
  return (
    <div>
    <Router>
      <div>
        <Route path="/" component={NavBar} />
        <Route path="/" component={BriefAboutInsert} />
        <Route path="/about/" component={About} />
        <Route path="/music/" component={Music} />
        <Route path="/projects/" component={Projects} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
    </div>
  );
}

export default AppRouter;
