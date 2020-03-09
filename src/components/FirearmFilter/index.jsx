import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterForm from './FilterForm';
import RadioButton from './RadioButton';

import { types, calibres } from './data';

import './FirearmFilter.css';

const FirearmFilter = ({ handleSetFilterByType }) => {
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
    <div className="filterCard">
      <FilterForm heading="Filter By Type">
        {renderButtons(types, filterByType, handleUpdateTypeFilter)}
      </FilterForm>
      <FilterForm heading="Filter By Calibre">
        {renderButtons(calibres, filterByCaliber, handleUpdateCaliberFilter)}
      </FilterForm>
    </div>
  );
};

FirearmFilter.propTypes = {
  handleSetFilterByType: PropTypes.func,
};


export default FirearmFilter;
