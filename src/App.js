import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DocumentTitle from 'react-document-title';
import './assets/css/main.css';

import NavBar from './components/NavBar.js';
import About from './components/content/About.js';
import Music from './components/content/Music.js';
import Teaching from './components/content/Teaching.js';
import Contact from './components/content/Contact.js';
import Welcome from './components/content/Welcome.js';
import BriefAboutInsert from './components/BriefAboutInsert.js';

function AppRouter() {
  return (
    <DocumentTitle title='Alex Krentsel'>
      <Router>
        <div id="wrapper">
          <Route path="/" component={NavBar} />
          <div id="main">
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/music" component={Music} />
            <Route path="/teaching" component={Teaching} />
            <Route path="/contact" component={Contact} />
          </div>
          <Route path="/" component={BriefAboutInsert} />
        </div>
      </Router>
    </DocumentTitle>
  );
}

export default AppRouter;
