import React from 'react';
import PropTypes from 'prop-types';

import RowFragment from './row-fragment';

import styles from './styles.module.css';

const MagazineRow = ({
  text,
  weight,
  qty,
  increaseItem,
  decreaseItem,
}) => (
  <div className={`gear-table-row--container ${styles.magazineRow}`}>

    <span className={styles.noButtons}>{text}</span>

    <RowFragment
      weight={weight}
      qty={qty}
      increaseItem={increaseItem}
      decreaseItem={decreaseItem}
    />

  </div>
);

MagazineRow.propTypes = {
  text: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  increaseItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
};

export default MagazineRow;
