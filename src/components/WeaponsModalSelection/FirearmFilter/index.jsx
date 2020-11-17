import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterForm from './FilterForm';
import RadioButton from './RadioButton';

import { types, calibres } from './data';

import './FirearmFilter.css';
import styles from './styles.module.css';

const FirearmFilter = ({ handleSetFilterByType, handleSetShowFilters }) => {
  const [filterByType, setTypeFilter] = useState('All');
  const [filterByCaliber, setCaliberFilter] = useState('All');

  const handleUpdateTypeFilter = (value) => {
    handleSetFilterByType(value, filterByCaliber);
    setTypeFilter(value);
  };

  const handleUpdateCaliberFilter = (value) => {
    handleSetFilterByType(filterByType, value);
    setCaliberFilter(value);
  };

  const renderButtons = (values, checkedFilter, handleUpdate) => (
    values.map((data) => (
      <RadioButton
        key={data.key}
        value={data.value}
        classNameValue={data.className}
        checked={checkedFilter === data.value}
        handleUpdate={handleUpdate}
      />
    ),
    )
  );

  return (
    <div className={styles.card}>

      <div className={styles.header}>
        <span>Filters</span>
        <button
          aria-label="close"
          className={styles.close}
          type="button"
          onClick={() => handleSetShowFilters()}
        />
      </div>

      <div className={styles.body}>
        <FilterForm heading="Filter By Type">
          {renderButtons(types, filterByType, handleUpdateTypeFilter)}
        </FilterForm>
        <FilterForm heading="Filter By Calibre">
          {renderButtons(calibres, filterByCaliber, handleUpdateCaliberFilter)}
        </FilterForm>
      </div>

    </div>
  );
};

FirearmFilter.propTypes = {
  handleSetFilterByType: PropTypes.func.isRequired,
  handleSetShowFilters: PropTypes.func.isRequired,
};

export default FirearmFilter;
