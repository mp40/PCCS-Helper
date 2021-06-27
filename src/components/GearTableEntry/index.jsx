import React from 'react';
import PropTypes from 'prop-types';

import { correctFloatingPoint } from '../../utils';

import styles from './styles.module.css';

const GearTableEntry = ({
  text,
  removeItem,
  modifyItem,
  weight,
  qty,
  increaseItem,
  decreaseItem,
}) => (
  <div className={`gear-table-row--container ${!removeItem && !modifyItem ? styles.magazineRow : ''}`}>
    {removeItem && modifyItem && (
    <span>
      <button aria-label="remove" type="button" className="button--standard button--close" onClick={() => removeItem()} />
      <button type="button" className="button-clickable-item-row" onClick={() => modifyItem()}>{text}</button>
    </span>
    )}

    {removeItem && !modifyItem && (
    <span>
      <button aria-label="remove" type="button" className="button--standard button--close" onClick={() => removeItem()} />
      <span>{text}</span>
    </span>
    )}

    {!removeItem && !modifyItem && (
    <span className={styles.noButtons}>{text}</span>
    )}

    <span>{weight}</span>
    <span>{qty}</span>
    <span>{correctFloatingPoint(weight * qty)}</span>
    <span>
      <button aria-label="up" type="button" className="button--standard button--up" onClick={() => increaseItem()} />
      <button aria-label="down" type="button" className="button--standard button--down" onClick={() => decreaseItem()} />
    </span>
  </div>
);

GearTableEntry.propTypes = {
  text: PropTypes.string.isRequired,
  removeItem: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
  modifyItem: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
  weight: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  increaseItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
};

export default GearTableEntry;
