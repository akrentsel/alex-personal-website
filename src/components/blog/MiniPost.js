import React from "react";
import dateFormat from "dateformat";

import { Link } from "react-router-dom";

var options = {
  year: "numeric",
  month: "short"
};

const MiniPost = ({ title, author, postPath, publishDate }) => (
  <section>
    <i>
      {dateFormat(publishDate, "mmm 'yy")}{" "}
      <b>
        <Link to={"/posts/" + postPath}>{title}</Link>
      </b>
    </i>
  </section>
);

export default MiniPost;
