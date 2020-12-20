import React from "react";
import DocumentTitle from "react-document-title";
import MiniPost from "components/blog/MiniPost.js";
import "assets/css/music.css";

const Posts = () => (
  <DocumentTitle title="Posts">
    <article className="post">
      <header>
        <div className="title">
          <h2>Posts</h2>
        </div>
      </header>
      <p>Thoughts on the world, for the world.</p>
      <section>
        <MiniPost />
        <MiniPost />
        <MiniPost />
      </section>
    </article>
  </DocumentTitle>
);

// <div className="mini-posts">
//   <article className="mini-post">
//     <header>
//       <h3>Dvorak Piano Quartet in E flat Major, Mvmt. 1 & 2</h3>
//       <time className="published" dateTime="">
//         UC Berkeley Noon Concert
//       </time>
//     </header>
//     <iframe
//       title="Dvorak Piano Quartet in E flat Major, Mvmt. 1 & 2"
//       src="https://www.youtube.com/embed/no2wYng-kWA"
//       frameBorder="0"
//       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//     ></iframe>
//   </article>
// </div>

export default Posts;
