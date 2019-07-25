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

const WeaponsModalFilterSelection = ({ handleSetFilterByType }) => {
  const [filterByType, setTypeFilter] = useState('All');
  const handleUpdateFilter = (event) => {
    handleSetFilterByType(event.target.value);
    setTypeFilter(event.target.value);
  };

  const renderRadioButton = (value, checked, className) => (
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
    <div>
      <div style={filterByTypeStyles}>Filter By Type</div>
      <form className="filterByFirearmTypeForm" style={filterByTypeStyles}>
        {renderRadioButton('All', filterByType === 'All', 'selectAllFilter')}
        {renderRadioButton('Rifles', filterByType === 'Rifles', 'selectRifleFilter')}
        {renderRadioButton('Pistols', filterByType === 'Pistols', 'selectPistolFilter')}
        {renderRadioButton('SMGs', filterByType === 'SMGs', 'selectSMGFilter')}
        {renderRadioButton('MGs', filterByType === 'MGs', 'selectMGFilter')}
        {renderRadioButton('Shotguns', filterByType === 'Shotguns', 'selectShotgunFilter')}
        {renderRadioButton('Sniper Rifles', filterByType === 'Sniper Rifles', 'selectSniperRifleFilter')}
      </form>
    </div>
  );
};

WeaponsModalFilterSelection.propTypes = {
  handleSetFilterByType: PropTypes.func,
};


export default WeaponsModalFilterSelection;
