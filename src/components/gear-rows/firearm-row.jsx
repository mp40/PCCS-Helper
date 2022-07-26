import React from 'react';
import PropTypes from 'prop-types';

import RowFragment from './row-fragment';
import LinkWrapper from '../widgets/link/link-wrapper';

import styles from './styles.module.css';

const FirearmRow = ({
  text,
  removeItem,
  firearmIndex,
  weight,
  qty,
  increaseItem,
  decreaseItem,
}) => (
  <div className="gear-table-row--container">

    <span className={styles.clickable}>
      <button aria-label="remove" type="button" className="button--standard button--close" onClick={() => removeItem()} />
      <LinkWrapper href={`modify/${firearmIndex}`}>
        <button
          aria-label="modify"
          className="button-clickable-item-row"
          type="button"
        >
          {text}
        </button>
      </LinkWrapper>
    </span>

    <RowFragment
      weight={weight}
      qty={qty}
      increaseItem={increaseItem}
      decreaseItem={decreaseItem}
    />

  </div>
);

FirearmRow.propTypes = {
  text: PropTypes.string.isRequired,
  removeItem: PropTypes.oneOfType([PropTypes.func]).isRequired,
  firearmIndex: PropTypes.oneOfType([PropTypes.number]).isRequired,
  weight: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  increaseItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
};

export default FirearmRow;
