import React from "react";

class TimelineIcon extends React.Component {
  constructor(props) {
    super(props);
    this.classes = this.props.iconClass + " img_logo";
  }

  render() {
    return (
      <div>
        <div
          className={this.classes}
          style={{
            border: "1px solid #d1c8c8"
          }}
        />
      </div>
    );
  }
}

export default TimelineIcon;
