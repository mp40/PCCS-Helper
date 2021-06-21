import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles.module.css';

const ReactionTable = ({ sal }) => (
  <div className={styles.wrapper}>
    <div>
      <span>Reaction Time</span>
    </div>
    <div>
      <span>Any Action</span>
      <span>{`≤ ${sal - 3}`}</span>
    </div>
    <div>
      <span>Duck/Go Prone</span>
      <span>{`≤ ${sal}`}</span>
    </div>
    <div>
      <span>-1 AC &#38; Reroll</span>
      <span>
        {`≤ ${sal + 1}`}
      </span>
    </div>
  </div>
);

ReactionTable.propTypes = {
  sal: PropTypes.number,
};

export default ReactionTable;
