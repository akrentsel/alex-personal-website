import React from "react";
import MiniPost from "components/blog/MiniPost.js";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

const STATUS_WAITING = 0;
const STATUS_READY = 1;
const STATUS_ERROR = 2;

// This is the number of ms until "Loading..." will appear on the screen, if
// data isn't returned yet.
const GRACE_PERIOD_MS = 750;

// Number of featured posts to display
const NUM_FEATURED = 6;

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gracePeriod: true,
      dataStatus: STATUS_WAITING,
      postList: [],
      featured: props.featured
    };

    setTimeout(() => {
      this.setState({ gracePeriod: false });
    }, GRACE_PERIOD_MS);
  }

  getPostList() {
    var request = fetch(
      "https://325ab2lcl4.execute-api.us-east-1.amazonaws.com/default/" + (this.state.featured ? "featuredposts" : "posts"),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        data.sort(
          (entry1, entry2) =>
            Date.parse(entry2.publishDate) - Date.parse(entry1.publishDate)
        );
        this.setState({ dataStatus: STATUS_READY, postList: data });
        // TODO(akrentsel): Move creating miniposts into here. To avoid doing multiple times.
      })
      .catch(error => {
        this.setState({ dataStatus: STATUS_ERROR });
        console.log("Error while fetching:", error);
      });
  }

  componentDidMount() {
    this.getPostList();
  }

  render() {
    switch (this.state.dataStatus) {
      case STATUS_READY:
        const displayPosts = this.state.featured
          ? this.state.postList.slice(0, NUM_FEATURED)
          : this.state.postList;
        return (
          <>
            <ul>
              <FadeIn>
                {displayPosts.map((post, index) => (
                  <li key={post.postPath}>
                    <MiniPost
                      title={post.title}
                      author={post.author}
                      postPath={post.postPath}
                      publishDate={post.publishDate}
                    />
                  </li>
                ))}
                {this.state.featured && (
                  <li>
                    <p>
                      See more: <Link to="/posts">...all posts</Link>
                    </p>
                  </li>
                )}
              </FadeIn>
            </ul>
          </>
        );
      case STATUS_WAITING:
        return <p>{this.state.gracePeriod ? "" : "Loading..."}</p>;
      case STATUS_ERROR:
        return <p>Well this is embarassing...error loading posts. Try again later.</p>;
    }
  }
}

export default PostList;
