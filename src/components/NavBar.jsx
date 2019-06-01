import React from 'react';
import { connect } from 'react-redux';
import NavBarCreateChar from './NavBarCreateChar';
import './NavBar.css';

function NavBar(props) {
  return (
    <div className="menuBar">
      <div className="menuTitle">
        PCCS
      </div>
      {props.currentView === 'createChar'
        ? (
          <NavBarCreateChar
            totalWeight={props.totalWeight}
          />
        )
        : null}
    </div>
  );
}

const mapStateToProps = state => ({
  currentView: state.currentView,
  totalWeight: state.totalWeight,
});

export default connect(mapStateToProps)(NavBar);
