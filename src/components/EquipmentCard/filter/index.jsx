import React from 'react';
import { PropTypes } from 'prop-types';

import filters from './data';

import styles from './styles.module.css';

const EquipmentFilter = ({ filteredTags, handleTags, handleSetShowFilters }) => (
  <>
    <div className={`--modal ${styles.modal}`} />
    <div className={styles.card}>
      <div className={styles.header}>
        <span>Select Filters</span>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => handleSetShowFilters()}
        />
      </div>

      <div className={styles.tagContainer}>
        {filters.map((tag) => (
          <button
            type="button"
            className={`button-clickable-item-row  ${filteredTags.includes(tag) ? styles.selected : ''}`}
            onClick={() => handleTags(tag)}
            key={tag}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  </>
);

EquipmentFilter.propTypes = {
  handleSetShowFilters: PropTypes.func.isRequired,
  handleTags: PropTypes.func.isRequired,
  filteredTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EquipmentFilter;
