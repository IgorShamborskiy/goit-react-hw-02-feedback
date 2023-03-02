import React from 'react';
import PropTypes from 'prop-types';
import css from '../Statistic/StatisticValue.module.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.statdiv}>
    <li>Good:{good}</li>
    <li>Neutral:{neutral}</li>
    <li>Bad:{bad}</li>
    <li>Total:{total}</li>
    <li>Positive feedback:{positivePercentage}%</li>
  </div>
);

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
