import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
  currentView: state.currentView,
  totalWeight: state.totalWeight,
});

export default connect(mapStateToProps)(NavBar);
