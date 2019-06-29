import React from 'react';

class ToggleImage extends React.Component {
  state= {
    image: this.props.defaultImage,
    locked: false
  };

  handleClick = () => {
    if (!this.state.locked && this.props.clickedImage) {
      this.setState(state => ({
        image: this.props.clickedImage,
        locked: true
      }));
    }
  }

  handleMouseOver = () => {
    if (!this.state.locked && this.props.mouseOverImage) {
      this.setState(state => ({
        image: this.props.mouseOverImage
      }))
    }
  }

  handleMouseOut = () => {
    if (!this.state.locked && this.props.defaultImage) {
      this.setState(state => ({
        image: this.props.defaultImage
      }))
    }
  }

  // TODO(akrentsel): Move className to be given above the ToggleImage.
  // TODO(akrentsel): Move onClick and onMouseOver down to img.
  render() {
    return (
      <div className="logo" onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <img alt="Profile pic" src={this.state.image} />
      </div>
    );
  }
}

export default ToggleImage;
