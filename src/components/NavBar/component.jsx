import React from 'react';
import PropTypes from 'prop-types';
import NavBarCreateChar from './NavBarCreateChar';

import Print from '../Print';

import './NavBar.css';

const NavBar = ({ currentView, totalWeight }) => (
  <div className="menuBar">
    <div className="menuTitle">
        PCCS
    </div>
    {currentView === 'createChar'
        && (
          <div>
            <NavBarCreateChar
              totalWeight={totalWeight}
            />
            <Print />
          </div>
        )}
  </div>
);

NavBar.propTypes = {
  totalWeight: PropTypes.number,
  currentView: PropTypes.string,
};

export default NavBar;
