import React from "react";
import PostList from "components/blog/PostList.js";

const Welcome = () => (
  <article className="post">
    <h2 style={{ color: '#333', borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>Welcome</h2>
    <p style={{ fontSize: '1.1em', lineHeight: '1.6', marginBottom: '20px' }}>
      Welcome to my personal website, where you can learn about my music, teaching, and other activities.
    </p>
    <div style={{
      background: '#f0f0f0',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '25px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <p style={{ marginBottom: '0px', fontWeight: 'bold' }}>
        Note: for my academic website with papers, talks, and research interests, {" "}  
      <a
        href="https://people.eecs.berkeley.edu/~akrentsel/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#4da6ff' }}
      >
        see my academic webpage
      </a>
      .
      </p>
    </div>
    <h3 style={{ color: '#444', marginBottom: '15px' }}>Featured Blog Posts</h3>
    <PostList featured/>
  </article>
);

// TODO(akrentsel): Link to website source

export default Welcome;
