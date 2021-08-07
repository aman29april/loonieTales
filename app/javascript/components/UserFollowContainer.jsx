import React from "react";
import PropTypes from "prop-types";
import OverlayTriggerButton from "./OverlayTriggerButton";
import UserFollowButton from "./UserFollowButton";

class UserFollowContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { followerCount: this.props.followerCount };
  }

  render () {
    return (
      <div className={this.props.className}>
        <div className="following-metadata">
          <span className="following-count">
            {this.renderFollowingCount()}
          </span>
          <span className="follower-count">
            {this.renderFollowerCount()}
          </span>
        </div>
        {this.renderFollowButton()}
      </div>
    );
  }

  renderFollowingCount() {
    if (this.props.overlayTrigger) {
      return (
        <OverlayTriggerButton
          text={`<b>${this.props.followingCount}</b> Following`}
          apiEndpoint={`/api/following?user_id=${this.props.followed_id}`}
          overlayHeading={`${this.props.username} is Following`} />
      );
    } else {
      return (
        <span className="following-count">
          <b>{this.props.followingCount}</b> Following
        </span>
      );
    }
  }

  renderFollowerCount() {
    if (this.props.overlayTrigger) {
      return (
        <OverlayTriggerButton 
          text={`<b>${this.state.followerCount}</b> ${this.pluralizeFollower()}`}
          apiEndpoint={`/api/followers?user_id=${this.props.followed_id}`}
          overlayHeading={`${this.props.username} is Followed by`} />
      );
    } else {
      return (
        <span className="follower-count">
          <b>{this.state.followerCount}</b> {this.pluralizeFollower()}
        </span>
      );
    }
  }

  renderFollowButton() {
    if (this.props.hideButton) { return; }

    return (
      <UserFollowButton 
        following={this.props.following}
        followed_id={this.props.followed_id}
        onFollowerCountChange={this.handleFollowerCountChange.bind(this)} />
    );
  }

  handleFollowerCountChange(newCount) {
    this.setState({
      followerCount: newCount
    });
  }

  pluralizeFollower() {
    return (this.state.followerCount > 1 || this.state.followerCount === 0) ? 'Followers' : 'Follower';
  }
}


UserFollowContainer.propTypes = { following: PropTypes.bool,
  hideButton: PropTypes.bool,
  followed_id: PropTypes.number,
  followerCount: PropTypes.number,
  followingCount: PropTypes.number,
  username: PropTypes.string,
  overlayTrigger: PropTypes.bool
};

UserFollowContainer.defaultProps = {
  overlayTrigger: false
};
export default UserFollowContainer