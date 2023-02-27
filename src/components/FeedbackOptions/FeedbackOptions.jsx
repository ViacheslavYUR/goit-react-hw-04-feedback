import React from 'react';
import PropTypes from 'prop-types';

import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  const feedbackBtn = options.map(item => {
    return (
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          onLeaveFeedback(item);
        }}
      >
        {item}
      </button>
    );
  });
  return <div className={css.wrapper}>{feedbackBtn}</div>;
};
export default FeedbackOptions;

FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
