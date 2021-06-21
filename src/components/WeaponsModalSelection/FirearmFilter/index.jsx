import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RadioButton from '../../widgets/buttons/RadioButton';

import { types, calibres } from './data';

import styles from './styles.module.css';

const FirearmFilter = ({ handleSetFilterByType, handleSetShowFilters }) => {
  const [filterByType, setTypeFilter] = useState('All Firearms');
  const [filterByCaliber, setCaliberFilter] = useState('All Calibres');

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
      <div key={data.value}>
        <span>{data.value}</span>
        <RadioButton
          key={data.key}
          checked={checkedFilter === data.value}
          onClick={() => handleUpdate(data.value)}
        />
      </div>

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

        <div>
          <div>Filter By Type</div>
          {renderButtons(types, filterByType, handleUpdateTypeFilter)}
        </div>

        <div>
          <div>Filter By Calibre</div>
          {renderButtons(calibres, filterByCaliber, handleUpdateCaliberFilter)}
        </div>

      </div>

    </div>
  );
};

FirearmFilter.propTypes = {
  handleSetFilterByType: PropTypes.func.isRequired,
  handleSetShowFilters: PropTypes.func.isRequired,
};

export default FirearmFilter;
