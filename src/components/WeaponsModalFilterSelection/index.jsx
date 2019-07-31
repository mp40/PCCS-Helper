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

const typeButtonValues = ['All', 'Rifles', 'Pistols', 'SMGs', 'MGs', 'Shotguns', 'Sniper Rifles'];
const calibreButtonValues = ['All', '7.62mm NATO', '5.56mm NATO', '7.62 x 39mm', '5.45 x 39.5mm', '9mm Parabellum', 'Other'];

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

  const renderFilterByTypeForm = () => (
    <form className="filterByFirearmTypeForm" style={filterByTypeStyles}>
      {typeButtonValues.map(
        value => renderRadioButton(value, filterByType === value, buildTypeClassName(value), handleUpdateTypeFilter),
      )}
    </form>
  );

  const renderFilterByCalibreForm = () => (
    <form className="filterByFirearmTypeForm" style={filterByTypeStyles}>
      {calibreButtonValues.map(
        value => renderRadioButton(value, filterByCaliber === value, buildCalibreClassName(value), handleUpdateCaliberFilter),
      )}
      {/* {renderRadioButton('All', filterByCaliber === 'All', 'selectAllCalibersFilter', handleUpdateCaliberFilter)}
      {renderRadioButton('7.62mm NATO', filterByCaliber === '7.62mm NATO', 'select762NATOFilter', handleUpdateCaliberFilter)}
      {renderRadioButton('5.56mm NATO', filterByCaliber === '5.56mm NATO', 'select556NATOFilter', handleUpdateCaliberFilter)}
      {renderRadioButton('7.62 x 39mm', filterByCaliber === '7.62 x 39mm', 'select762x39Filter', handleUpdateCaliberFilter)}
      {renderRadioButton('5.45 x 39.5mm', filterByCaliber === '5.45 x 39.5mm', 'select545x39Filter', handleUpdateCaliberFilter)}
      {renderRadioButton('9mm Parabellum', filterByCaliber === '9mm Parabellum', 'selectParabellumFilter', handleUpdateCaliberFilter)}
      {renderRadioButton('Other', filterByCaliber === 'Other', 'selectOtherCaliberFilter', handleUpdateCaliberFilter)} */}
    </form>
  );

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
