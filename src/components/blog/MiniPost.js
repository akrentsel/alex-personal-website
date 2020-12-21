import React from "react";

import { Link } from "react-router-dom";

const MiniPost = ({ title, author, postPath, publishDate }) => (
  <section>
    <Link to={"/posts/" + postPath}>{title}</Link> : {author} : {publishDate}
  </section>
);

export default MiniPost;
