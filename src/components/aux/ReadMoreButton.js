import React from "react";
import ScrollUpButton from "react-scroll-up-button";

class ReadMoreButton extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled">
                    // Here you can add any react component or jsx
                    // ScrollButton will apply the classnames given to the container of whatever you put here.
                    // Changing appearence this way will only work when importing the default ScrollUpButton, importing any of the specific buttons do not except children
                </ScrollUpButton>
            </div>
        );
    }
}

export default ReadMoreButton;
