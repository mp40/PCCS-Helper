import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WeaponsModalFilterSelection from '../WeaponsModalFilterSelection';
import ButtonStandard from '../widgets/buttons/ButtonStandard';
import ButtonInfo from '../widgets/buttons/ButtonInfo';


import './WeaponsModalSelection.css';

const filterCard = {
  // paddingLeft: '1rem',
  marginTop: '2rem',
  background: 'whitesmoke',
  borderRadius: '3px',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  height: '10rem',
  width: '60rem',
  position: 'relative',
  top: 'calc(-20%)',
  // top: 'calc(50% - 30rem)',
  left: 'calc(50% - 30rem)',
  overflow: 'auto',
  // transition: 'height 2s',
  // transitioTimingFunction: 'linear',
  // visability: 'hidden',
  // opacity: '0',
  backgroundColor: 'pink',
};

const WeaponsModalSelection = ({ firearmsArray, toggleOffWeaponCardViews, handleShowGunStats, handleAddFirearm }) => {
  const [viewFilters, toggleViewFilters] = useState(false);

  const newFirearmsArray = firearmsArray;

  useEffect(() => {
    const wrapper = document.getElementsByClassName('filterCardWrapper');
    console.log(wrapper);
    if (wrapper[0]) {
      wrapper[0].classList.add('trans');
      console.log(wrapper);
    }
  });

  const handleToggleViewFilters = () => {
    toggleViewFilters(!viewFilters);
  };

  return (
  // <div>
    <>
      <div className="equipmentListCard">
        <div className="equipmentListHeader">
        Select firearms
          <ButtonStandard
            id="closeFirearmModal"
            name="Close List"
            onClick={toggleOffWeaponCardViews.bind(this, 'showFirearms')}
          />
          <ButtonStandard
            id="showFirearmFilters"
            name="Filters"
            onClick={handleToggleViewFilters}
          />
        </div>

        <div className="equipmentListBody">
          {newFirearmsArray.map(gunObj => (
            <div key={gunObj.name} style={{ display: 'flex', width: '30%', paddingLeft: '.2rem', paddingRight: '.2rem' }}>
              <ButtonInfo
                id={`view${gunObj.name}`}
                onClick={handleShowGunStats.bind(this, gunObj)}
              />
              <div
                className="equipmentEntry"
                style={{ width: '100%' }}
                id={gunObj.name}
                onClick={handleAddFirearm.bind(this, gunObj)}
              >
                <div>
                  {gunObj.name}
                </div>
                <div>
                  {`${gunObj.weight} lbs`}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {viewFilters
   && (
   <div className="filterCardWrapper">
     <WeaponsModalFilterSelection />
   </div>
   )}
    </>
  // {/* {viewFilters
  // && (
  // <div style={filterCard}>
  //   <WeaponsModalFilterSelection />
  // </div>
  // )} */}

  // </div>

  );
};

WeaponsModalSelection.propTypes = {
  firearmsArray: PropTypes.arrayOf(
    PropTypes.object,
  ),
  toggleOffWeaponCardViews: PropTypes.func,
  handleShowGunStats: PropTypes.func,
  handleAddFirearm: PropTypes.func,
};

export default WeaponsModalSelection;
