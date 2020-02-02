import React from 'react';

// queryState can be "input" (waiting for input from user), "wait" (request made), "success", or "fail"
class LinkShortener extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      queryState: "input",
      shortLink: ""
    }
  }

  handleShortenClick = () => {
    this.setState(state => ({
      queryState: "wait"
    }));
  }

  makeRequest = () => {
  }

  render () {
    return (
      <div>
        <div hidden={this.state.queryState !== "input"}>
          Link: <input/> <br />
          Preferred Short: www.domain-name.com/<input hint="hi"/> <br />
          <button onClick={this.handleShortenClick}> Shorten </button>
        </div>

        <p hidden={this.state.queryState !== "wait"}> Waiting for Response... </p>
        <p hidden={this.state.queryState !== "fail"}> Response was unsuccessful </p>
        <p hidden={this.state.queryState !== "success"}> Success! The shortlink is: {this.state.shortLink} </p>
      </div>
    );
  }
}

export default LinkShortener;
