import React from "react";
import PropTypes from 'prop-types'

class TagList extends React.Component {
  render () {
    return (
      <div className={`tags-wrapper ${this.props.className}`} >
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    return this.props.tags.map(tag => {
      return (
        <a
          key={tag.id}
          className="tag"
          href={`/tags/${tag.slug}`}>
          {tag.name}
        </a>
      );
    });
  }
}

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default TagList