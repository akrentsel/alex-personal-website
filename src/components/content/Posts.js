import React from "react";
import DocumentTitle from "react-document-title";
import PostList from "components/blog/PostList";

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Posts">
        <article className="post">
          <header>
            <div className="title">
              <h2>Posts</h2>
            </div>
          </header>
          <section>
            <p>
              Thoughts on the world, for the world. A mix of technical posts,
              comments on books, and discussion of ideas.
            </p>
            <PostList />
          </section>
        </article>
      </DocumentTitle>
    );
  }
}

export default Posts;
