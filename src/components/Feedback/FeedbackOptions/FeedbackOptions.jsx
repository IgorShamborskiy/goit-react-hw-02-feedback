import React from 'react';

import css from '../FeedbackOptions/Controls.module.css';
const Controls = ({ ongoodIncrement, onneutralIncrement, onbadIncrement }) => (
  <div>
    <button className={css.btn} type="button" onClick={ongoodIncrement}>
      Good
    </button>
    <button className={css.btn} type="button" onClick={onneutralIncrement}>
      Neutral
    </button>
    <button className={css.btn} type="button" onClick={onbadIncrement}>
      Bad
    </button>
  </div>
);
export default Controls;
