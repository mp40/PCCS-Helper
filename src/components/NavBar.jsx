import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBarCreateChar from './NavBarCreateChar';
import './NavBar.css';

function NavBar({ currentView, totalWeight }) {
  return (
    <div className="menuBar">
      <div className="menuTitle">
        PCCS
      </div>
      {currentView === 'createChar'
        ? (
          <NavBarCreateChar
            totalWeight={totalWeight}
          />
        )
        : null}
    </div>
  );
}

NavBar.propTypes = {
  totalWeight: PropTypes.number,
  currentView: PropTypes.string,
};

const mapStateToProps = state => ({
  currentView: state.currentView,
  totalWeight: state.totalWeight,
});

export default connect(mapStateToProps)(NavBar);
