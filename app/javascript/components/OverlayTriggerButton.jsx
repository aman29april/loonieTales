import React from "react";
import PropTypes from "prop-types";
import PubSub from "pubsub-js";

class OverlayTriggerButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleOpenClick = this.handleOpenClick.bind(this);
  }

  render () {
    return (
      <span>
        <span dangerouslySetInnerHTML={ {__html: this.props.text} } onClick={this.handleOpenClick}>
        </span>
      </span>
    );
  }

  handleOpenClick(event) {
    /** Notify UserOverlay component **/
    PubSub.publish('OverlayTriggerButton:onClick', {
      endpoint: this.props.apiEndpoint,
      overlayHeading: this.props.overlayHeading
    });
  }

}


OverlayTriggerButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  overlayHeading: PropTypes.string,
  apiEndpoint: PropTypes.string.isRequired
};
export default OverlayTriggerButton