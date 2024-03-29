import React from "react";
import DocumentTitle from "react-document-title";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "assets/css/music.css";
import dateFormat from "dateformat";

const STATUS_WAITING = 0;
const STATUS_READY = 1;
const STATUS_NONEXISTANT = 2;
const STATUS_ERROR = 3;

// This is the number of ms until "Loading..." will appear on the screen, if
// data isn't returned yet.
const GRACE_PERIOD_MS = 750;

// Custom Renderer is used to set the max width of images to a percent of their container.
const renderers = {
  // TODO(akrentsel): Consider extending support to sending a maximum height that is passed in through the title.
  // I can parse the title as a JSON object containing an explicit max width and max height, and use those values
  // here if they are set instead.
  image: ({ alt, src, title }) => (
    <div style={{ textAlign: 'center' }}>
      <figure style={{ display: 'inline-block', maxWidth: '85%' }}>
        <img
          alt={alt}
          src={src}
          title={title}
          style={{ maxWidth: '100%' }}
        />
        <figcaption style={{ fontStyle: 'italic' }}>{alt}</figcaption>
      </figure>
    </div>
  ),
};

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gracePeriod: true,
      dataStatus: STATUS_WAITING,
      title: "Loading...",
      markdownContent: "",
      author: "",
      publishDate: ""
    };
    setTimeout(() => {
      this.setState({ gracePeriod: false });
    }, GRACE_PERIOD_MS);
    this.getPostDetails(props.match.params.postPath);
  }

  getPostDetails(postPath) {
    fetch(
      "https://325ab2lcl4.execute-api.us-east-1.amazonaws.com/default/posts?postPath=" +
        postPath,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(response => response.json()).then(data => {
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

  renderStatusContent() {
    switch (this.state.dataStatus) {
      case STATUS_WAITING:
        return <p>{this.state.gracePeriod ? "" : "Loading..."}</p>;
      case STATUS_READY:
        return (
          <>
            <header>
              <div className="title">
                <h2>{this.state.title}</h2>
                <p>
                  Published {dateFormat(this.state.publishDate, "mmm dS, yyyy")}
                </p>
              </div>
            </header>
            <section>
              <ReactMarkdown
                plugins={[gfm]}
                children={this.state.markdownContent}
                renderers={renderers}
              />
            </section>
          </>
        );
      case STATUS_NONEXISTANT:
        return <p>Post not found, please double check the link.</p>;
      case STATUS_ERROR:
        return <p>Error response from server, try again later.</p>;
      default:
        return <p>Unknown error, please try again later.</p>;
    }
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
      default:
        title = "Unknown Error";
        break;
    }
    return (
      <DocumentTitle title={title}>
        <article className="post">{this.renderStatusContent()}</article>
      </DocumentTitle>
    );
  }
}

export default Post;
