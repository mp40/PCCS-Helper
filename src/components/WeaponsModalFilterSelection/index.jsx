import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../WeaponsCard/WeaponsCard.css';

const filterByTypeStyles = {
  fontSize: 'medium',
  marginLeft: '1rem',
};

const radioButtonContainer = {
  display: 'flex',
  fontSize: 'small',
};

const filterWrapperStyles = {
  display: 'flex',
};

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
    <div style={radioButtonContainer}>
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

  return (
    <div style={filterWrapperStyles}>
      <div>
        <div style={filterByTypeStyles}>Filter By Type</div>
        <form className="filterByFirearmTypeForm" style={filterByTypeStyles}>
          {renderRadioButton('All', filterByType === 'All', 'selectAllFilter', handleUpdateTypeFilter)}
          {renderRadioButton('Rifles', filterByType === 'Rifles', 'selectRifleFilter', handleUpdateTypeFilter)}
          {renderRadioButton('Pistols', filterByType === 'Pistols', 'selectPistolFilter', handleUpdateTypeFilter)}
          {renderRadioButton('SMGs', filterByType === 'SMGs', 'selectSMGFilter', handleUpdateTypeFilter)}
          {renderRadioButton('MGs', filterByType === 'MGs', 'selectMGFilter', handleUpdateTypeFilter)}
          {renderRadioButton('Shotguns', filterByType === 'Shotguns', 'selectShotgunFilter', handleUpdateTypeFilter)}
          {renderRadioButton('Sniper Rifles', filterByType === 'Sniper Rifles', 'selectSniperRifleFilter', handleUpdateTypeFilter)}
        </form>
      </div>
      <div>
        <div style={filterByTypeStyles}>Filter By Type</div>
        <form className="filterByFirearmTypeForm" style={filterByTypeStyles}>
          {renderRadioButton('All', filterByCaliber === 'All', 'selectAllCalibersFilter', handleUpdateCaliberFilter)}
          {renderRadioButton('7.62mm NATO', filterByCaliber === '7.62mm NATO', 'select762NATOFilter', handleUpdateCaliberFilter)}
          {renderRadioButton('5.56mm NATO', filterByCaliber === '5.56mm NATO', 'select556NATOFilter', handleUpdateCaliberFilter)}
          {renderRadioButton('7.62 x 39mm', filterByCaliber === '7.62 x 39mm', 'select762x39Filter', handleUpdateCaliberFilter)}
          {renderRadioButton('5.45 x 39.5mm', filterByCaliber === '5.45 x 39.5mm', 'select545x39Filter', handleUpdateCaliberFilter)}
          {renderRadioButton('9mm Parabellum', filterByCaliber === '9mm Parabellum', 'selectParabellumFilter', handleUpdateCaliberFilter)}
          {renderRadioButton('Other', filterByCaliber === 'Other', 'selectOtherCaliberFilter', handleUpdateCaliberFilter)}
        </form>
      </div>
    </div>
  );
};

WeaponsModalFilterSelection.propTypes = {
  handleSetFilterByType: PropTypes.func,
};


export default WeaponsModalFilterSelection;
