import React from 'react';
import PropTypes from 'prop-types';

const CommentItem = ({ comment: { body } }) => {
  return (
    <div className="comments">
      <div className="post bg-white p-1 my-1">
        <h4>{body}</h4>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired
};

export default CommentItem;
