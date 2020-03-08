import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../WeaponsCard/WeaponsCard.css';

import './styles.css';

const buildTypeClassName = (value) => {
  if (value === 'Sniper Rifles') {
    return 'selectSniperRiflesFilter';
  }
  return `select${value}Filter`;
};

const buildCalibreClassName = (value) => {
  if (value === 'All') {
    return 'selectAllCalibersFilter';
  }
  if (value === 'Other') {
    return 'selectOtherCaliberFilter';
  }
  return `select${value}Filter`.replace(/[^\w]/g, '');
};

const getClassName = (value) => (value === 'type' ? buildTypeClassName : buildCalibreClassName);

const typeButtonValues = ['All', 'Rifles', 'Pistols', 'SMGs', 'MGs', 'Shotguns', 'Sniper Rifles'];
const calibreButtonValues = ['All', '7.62mm NATO', '5.56mm NATO', '7.62 x 39mm', '5.45 x 39.5mm', '9mm Parabellum', 'Other'];
const getValueArray = (value) => (value === 'type' ? typeButtonValues : calibreButtonValues);

const WeaponsModalFilterSelection = ({ handleSetFilterByType }) => {
  const [filterByType, setTypeFilter] = useState('All');
  const [filterByCaliber, setCaliberFilter] = useState('All');

  const handleUpdateTypeFilter = (event) => {
    handleSetFilterByType(event.target.value, filterByCaliber);
    setTypeFilter(event.target.value);
  };

  const handleUpdateCaliberFilter = (event) => {
    handleSetFilterByType(filterByType, event.target.value);
    setCaliberFilter(event.target.value);
  };

  const renderRadioButton = (value, checked, className, handleUpdateFilter) => (
    <div key={value}>
      <div>{value}</div>
      <input
        type="radio"
        name="filter"
        value={value}
        checked={checked}
        className={className}
        onChange={handleUpdateFilter}
      />
    </div>
  );

  const renderFilterForm = (filterBy) => {
    const filterValue = filterBy === 'type' ? filterByType : filterByCaliber;
    const handleUpdateFilter = filterBy === 'type' ? handleUpdateTypeFilter : handleUpdateCaliberFilter;
    return (
      <form className="filterByFirearmTypeForm">
        {getValueArray(filterBy).map(
          (value) => renderRadioButton(
            value,
            filterValue === value,
            getClassName(filterBy)(value),
            handleUpdateFilter,
          ),
        )}
      </form>
    );
  };

  const renderFilterByTypeForm = () => renderFilterForm('type');
  const renderFilterByCalibreForm = () => renderFilterForm('calibre');

  return (
    <div className="filterCard">
      <div>
        <div>Filter By Type</div>
        {renderFilterByTypeForm()}
      </div>
      <div>
        <div>Filter By Calibre</div>
        {renderFilterByCalibreForm()}
      </div>
    </div>
  );
};

WeaponsModalFilterSelection.propTypes = {
  handleSetFilterByType: PropTypes.func,
};


export default WeaponsModalFilterSelection;
