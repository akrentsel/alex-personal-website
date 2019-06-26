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


// <img
//   className="img_logo"
//   src="https://uploads.codesandbox.io/uploads/user/527a32a2-22ff-43fd-98ef-e7967feab739/UYdN-o_1ch5orgnh1itn19bg1cbj150v1eke1i.jpg"
//   style={{
//     border: "1px solid #d1c8c8"
//   }}
// />
