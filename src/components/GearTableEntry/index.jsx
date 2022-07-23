import React from 'react';
import PropTypes from 'prop-types';

import LinkWrapper from '../widgets/link/link-wrapper';

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
    {removeItem && typeof modifyItem === 'number' && (
    <span className={styles.clickable}>
      <button aria-label="remove" type="button" className="button--standard button--close" onClick={() => removeItem()} />
      <LinkWrapper href={`modify/${modifyItem}`}>
        <button
          aria-label="modify"
          className="button-clickable-item-row"
          type="button"
        >
          {text}
        </button>
      </LinkWrapper>
    </span>
    )}

    {removeItem && typeof modifyItem !== 'number' && (
    <span>
      <button aria-label="remove" type="button" className="button--standard button--close" onClick={() => removeItem()} />
      <span>{text}</span>
    </span>
    )}

    {!removeItem && typeof modifyItem !== 'number' && (
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
  modifyItem: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  weight: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  increaseItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
};

export default GearTableEntry;
