import React from "react";
import DocumentTitle from 'react-document-title';

const Contact = () => (
    <DocumentTitle title='Contact'>
      <article className="post">
      <header>
        <div className="title">
          <h2>Contact</h2>
        </div>
      </header>
        <p> I love meeting new people and exchanging ideas. If you want to ask a question,
        get lunch or coffee, or just say hi, shoot me an email at <a target="_blank" rel="noopener noreferrer" href="mailto:alex@krentsel.com">alex@krentsel.com</a>.</p>
      </article>
    </DocumentTitle>
);

export default Contact;
