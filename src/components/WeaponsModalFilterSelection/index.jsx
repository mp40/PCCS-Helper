import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../WeaponsCard/WeaponsCard.css';

const filterByTypeStyles = {
  fontSize: 'medium',
  marginLeft: '1rem',
  marginBottom: '0.33rem',
  textAlign: 'center',
};

const radioButtonContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 'small',
};

const filterWrapperStyles = {
  display: 'flex',
  marginTop: '0.5rem',
};

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

const getClassName = value => (value === 'type' ? buildTypeClassName : buildCalibreClassName);

const typeButtonValues = ['All', 'Rifles', 'Pistols', 'SMGs', 'MGs', 'Shotguns', 'Sniper Rifles'];
const calibreButtonValues = ['All', '7.62mm NATO', '5.56mm NATO', '7.62 x 39mm', '5.45 x 39.5mm', '9mm Parabellum', 'Other'];
const getValueArray = value => (value === 'type' ? typeButtonValues : calibreButtonValues);


const WeaponsModalFilterSelection = ({ handleSetFilterByType }) => {
  const [filterByType, setTypeFilter] = useState('All');
  const [filterByCaliber, setCaliberFilter] = useState('All');

  const handleUpdate = (filterBy, setFilter) => (event) => {
    handleSetFilterByType(event.target.value, filterBy);
    setFilter(event.target.value);
  };

  const handleUpdateTypeFilter = handleUpdate(filterByCaliber, setTypeFilter);
  const handleUpdateCaliberFilter = handleUpdate(filterByType, setCaliberFilter);

  const renderRadioButton = (value, checked, className, handleUpdateFilter) => (
    <div style={radioButtonContainer} key={value}>
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
      <form className="filterByFirearmTypeForm" style={filterByTypeStyles}>
        {getValueArray(filterBy).map(
          value => renderRadioButton(
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
    <div style={filterWrapperStyles}>
      <div>
        <div style={filterByTypeStyles}>Filter By Type</div>
        {renderFilterByTypeForm()}
      </div>
      <div style={{ marginLeft: '1rem' }}>
        <div style={filterByTypeStyles}>Filter By Calibre</div>
        {renderFilterByCalibreForm()}
      </div>
    </div>
  );
};

WeaponsModalFilterSelection.propTypes = {
  handleSetFilterByType: PropTypes.func,
};


export default WeaponsModalFilterSelection;
