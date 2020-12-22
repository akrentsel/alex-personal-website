import React from "react";
import dateFormat from "dateformat";

import { Link } from "react-router-dom";

const MiniPost = ({ title, author, postPath, publishDate }) => (
  <section>
    {dateFormat(publishDate, "mmm yyyy")}
    {" : "}
    <b>
      <Link to={"/posts/" + postPath}>{title}</Link>
    </b>
  </section>
);

export default MiniPost;
