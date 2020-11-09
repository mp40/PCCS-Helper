/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { PropTypes } from 'prop-types';

import filters from './data';

import styles from './styles.module.css';

const EquipmentFilter = ({ filteredTags, handleTags, toggleFilters }) => (
  <>
    <div className={`--modal ${styles.modal}`} />
    <div className={styles.card}>
      <div className={styles.header}>
        <span>Select Filters</span>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => toggleFilters()}
        />
      </div>

      <div className={styles.tagContainer}>
        {filters.map((tag) => (
          <div
            className={`--selectableRow  ${filteredTags.includes(tag) ? styles.selected : ''}`}
            onClick={() => handleTags(tag)}
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  </>
);

EquipmentFilter.propTypes = {
  toggleFilters: PropTypes.func.isRequired,
  handleTags: PropTypes.func.isRequired,
  filteredTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EquipmentFilter;
