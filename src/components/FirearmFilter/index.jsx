import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterForm from './FilterForm';
import RadioButton from './RadioButton';

import { types, calibres } from './data';

// import '../WeaponsCard/WeaponsCard.css';

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

  return (
    <div className="filterCard">
      <FilterForm heading="Filter By Type">
        {types.map((type) => (
          <RadioButton
            key={type.key}
            value={type.value}
            classNameValue={type.className}
            checked={filterByType === type.value}
            handleUpdate={handleUpdateTypeFilter}
          />
        ),
        )}
      </FilterForm>
      <FilterForm heading="Filter By Calibre">
        {calibres.map((calibre) => (
          <RadioButton
            key={calibre.key}
            value={calibre.value}
            classNameValue={calibre.className}
            checked={filterByCaliber === calibre.value}
            handleUpdate={handleUpdateCaliberFilter}
          />
        ),
        )}
      </FilterForm>
    </div>
  );
};

FirearmFilter.propTypes = {
  handleSetFilterByType: PropTypes.func,
};


export default FirearmFilter;
