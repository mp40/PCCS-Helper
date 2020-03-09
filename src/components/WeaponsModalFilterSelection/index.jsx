import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RadioButton from './RadioButton';

import { types, calibres } from './data';

import '../WeaponsCard/WeaponsCard.css';

import './styles.css';

const WeaponsModalFilterSelection = ({ handleSetFilterByType }) => {
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
      <div>
        <div>Filter By Type</div>
        <div className="filterByFirearmTypeForm">
          {types.map((type) => (
            <RadioButton
              key={type.key}
              value={type.value}
              className={type.className}
              checked={filterByType === type.value}
              handleUpdate={handleUpdateTypeFilter}
            />
          ),
          )}
        </div>
      </div>
      <div>
        <div>Filter By Calibre</div>
        <div className="filterByFirearmCalibreForm">
          {calibres.map((calibre) => (
            <RadioButton
              key={calibre.key}
              value={calibre.value}
              className={calibre.className}
              checked={filterByCaliber === calibre.value}
              handleUpdate={handleUpdateCaliberFilter}
            />
          ),
          )}
        </div>
      </div>
    </div>
  );
};

WeaponsModalFilterSelection.propTypes = {
  handleSetFilterByType: PropTypes.func,
};


export default WeaponsModalFilterSelection;
