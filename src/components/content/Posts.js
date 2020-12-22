import React from "react";
import DocumentTitle from "react-document-title";
import MiniPost from "components/blog/MiniPost.js";
import "assets/css/music.css";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: []
    };
  }

  getPostList() {
    var request = fetch(
      "https://325ab2lcl4.execute-api.us-east-1.amazonaws.com/default/posts",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ postList: data });
        // TODO(akrentsel): Move creating miniposts into here. To avoid doing multiple times.
      })
      .catch(error => console.log("Error while fetching:", error));
  }

  componentDidMount() {
    this.getPostList();
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
            {this.state.postList.map((post, index) => (
              <MiniPost
                key={post.postPath}
                title={post.title}
                author={post.author}
                postPath={post.postPath}
                publishDate={post.publishDate}
              />
            ))}
          </section>
        </article>
      </DocumentTitle>
    );
  }
}

export default Posts;
