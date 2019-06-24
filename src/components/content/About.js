import React from "react";
import DocumentTitle from 'react-document-title';

const About = () => (
    <DocumentTitle title='About'>
      <article className="post">
        <header>
          <div className="title">
            <h2><a href="single.html">About</a></h2>
          </div>
        </header>
        <p>lahsf</p>
      </article>
    </DocumentTitle>
);

export default About;

// Idea - add timeline, where last thing is the date and time and it uses the viewer's IP address to say "Person from Italy looked at website". More info button that explains how it works.
