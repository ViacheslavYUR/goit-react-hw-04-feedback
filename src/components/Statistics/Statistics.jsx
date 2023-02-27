import React from 'react';
import PropTypes from 'prop-types';

import css from './statistics.module.css';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <ul className={css.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>
        Positive feedback:
        {positivePercentage} %
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
