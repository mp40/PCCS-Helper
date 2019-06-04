import React from 'react';
import PropTypes from 'prop-types';
import NavBarCreateChar from './NavBarCreateChar';
import './NavBar.css';

const NavBar = ({ currentView, totalWeight }) => (
  <div className="menuBar">
    <div className="menuTitle">
        PCCS
    </div>
    {currentView === 'createChar'
        && (
          <NavBarCreateChar
            totalWeight={totalWeight}
          />
        )
      }
  </div>
);

NavBar.propTypes = {
  totalWeight: PropTypes.number,
  currentView: PropTypes.string,
};

export default NavBar;
