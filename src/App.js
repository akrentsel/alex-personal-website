import React from "react";
// import createBrowserHistory from 'history/createBrowserHistory';
// import GoogleAnalytics from "react-ga";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DocumentTitle from 'react-document-title';
import ScrollToTop from 'react-router-scroll-top'
import './assets/css/main.css';

import NavBar from './components/NavBar.js';
import About from './components/content/About.js';
import Music from './components/content/Music.js';
import Teaching from './components/content/Teaching.js';
import Projects from './components/content/Projects.js';
import Contact from './components/content/Contact.js';
import Welcome from './components/content/Welcome.js';
import BriefAboutInsert from './components/BriefAboutInsert.js';

// GoogleAnalytics.initialize("UA-143326735-1");
// var history = createBrowserHistory();
// history.listen(function (location) {
//     GoogleAnalytics.ga('set', 'page', location.pathname + location.search);
//     GoogleAnalytics.ga('send', 'pageview');
// });

class App extends React.Component {

  render = () => (
    <DocumentTitle title='Alex Krentsel'>
      <Router>
        <ScrollToTop/>
        <div id="wrapper">
          <Route path="/" component={NavBar} />
          <div id="main">
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/music" component={Music} />
            <Route path="/teaching" component={Teaching} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
          <Route path="/" component={BriefAboutInsert} />
        </div>
      </Router>
    </DocumentTitle>
  )
}

export default App;
