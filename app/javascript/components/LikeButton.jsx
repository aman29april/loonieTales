import React from "react";
import PubSub from "pubsub-js";
import PropTypes from "prop-types";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      liked: this.props.liked,
      likeCount: this.props.likeCount
    };

    this.onUnlikeClick = this.onUnlikeClick.bind(this);
    this.onLikeClick = this.onLikeClick.bind(this);
  }

  componentWillMount() {
    const { likeableType, likeableId } = this.props;
    this.token = PubSub.subscribe('LikeButton:onClick', (msg, data) => {
      if (likeableType === data.type && likeableId === data.id) {
        this.setState({ liked: data.liked, likeCount: data.count });
      }
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render () {
    return (
      <div className="like-button">
        <div className="like-button-wrapper">
          {this.renderLikeButton()}
        </div>
          {this.renderLikeCount()}
        </div>
    );
  }

  renderLikeButton() {
    if (this.state.liked) {
      return (
        <button className="unlike-button" onClick={this.onUnlikeClick}>
          <i className="fa fa-heart animated bounceIn" />
          <span className="hide-text">Unlike</span>
        </button>
      );
    } else {
      return (
        <button className="like-button" onClick={this.onLikeClick}>
          <i className="fa fa-heart-o" />
          <span className="hide-text">Like</span>
        </button>
      );
    }
  }

  renderLikeCount() {
    if (this.state.likeCount === 0 ) {
      return;
    }
    if (this.props.disableOverlay) {
      return <span className="like-count">{this.state.likeCount}</span>
    }
    return (
      <span className="like-count" style={{ cursor: 'pointer' }}>
          <OverlayTriggerButton 
            text={this.state.likeCount} 
            overlayHeading={this.props.overlayHeading} 
            apiEndpoint={this.props.overlayEndpoint} />
      </span>
    );
  }

  onUnlikeClick(e) {
    $.ajax({
      url: this.props.unlikeEndpoint,
      method: 'DELETE',
      dataType: 'json',
      success: (data) => {
        this.setState({ liked: data.liked, likeCount: data.count });
        PubSub.publish('LikeButton:onClick', data);
      }
    });
  }

  onLikeClick(e) {
    $.ajax({
      url: this.props.likeEndpoint,
      method: 'POST',
      dataType: 'json',
      success: (data) => {
        this.setState({ liked: data.liked, likeCount: data.count });
        PubSub.publish('LikeButton:onClick', data);
      }
    });
  }
}

LikeButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likeCount: PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]).isRequired,
  likeEndpoint: PropTypes.string.isRequired,
  unlikeEndpoint: PropTypes.string.isRequired,
  likeableType: PropTypes.string.isRequired,
  likeableId: PropTypes.number.isRequired,
  disableOverlay: PropTypes.bool,
  overlayHeading: PropTypes.string,
  overlayEndpoint: PropTypes.string
};

LikeButton.defaultProps = {
  disableOverlay: false
}

export default LikeButton