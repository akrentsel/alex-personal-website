import React from "react";
import DocumentTitle from "react-document-title";
import ReactMarkdown from "react-markdown";
import "assets/css/music.css";

const STATUS_WAITING = 0;
const STATUS_READY = 1;
const STATUS_NONEXISTANT = 2;
const STATUS_ERROR = 3;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStatus: STATUS_WAITING,
      title: "",
      markdownContent: "",
      author: "",
      publishDate: ""
    };
    this.getPostDetails(props.match.params.postPath);
  }

  getPostDetails(postPath) {
    var request = fetch(
      "https://325ab2lcl4.execute-api.us-east-1.amazonaws.com/default/posts?postPath=" +
        postPath,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          this.setState({ dataStatus: STATUS_NONEXISTANT });
          return;
        }

        const post = data[0];
        this.setState({
          dataStatus: STATUS_READY,
          title: post.title,
          markdownContent: post.markdownContent,
          author: post.author,
          publishDate: post.publishDate
        });
      })
      .catch(error => {
        this.setState({ dataStatus: STATUS_ERROR });
        console.log("Error while fetching:", error);
      });
  }

  render() {
    var title;
    switch (this.state.dataStatus) {
      case STATUS_WAITING:
        title = "Loading...";
        break;
      case STATUS_READY:
        title = this.state.title + " - Alex Krentsel";
        break;
      case STATUS_NONEXISTANT:
        title = "Post Not Found";
        break;
      case STATUS_ERROR:
        title = "Error";
        break;
    }
    return (
      <DocumentTitle title={title}>
        <article className="post">
          <header>
            <div className="title">
              <h2>{this.state.title}</h2>
              <p>By {this.state.author}</p>
              <p>Published {this.state.publishDate}</p>
            </div>
          </header>
          <section>
            <ReactMarkdown children={this.state.markdownContent} />
          </section>
        </article>
      </DocumentTitle>
    );
  }
}

export default Post;
