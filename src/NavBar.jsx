import React from 'react';
import './NavBar.css';
import NavBarCreateChar from './NavBarCreateChar';

function NavBar(props) {
  return (
    <div className="menuBar">
      <div className="menuTitle">
        PCCS
      </div>
      {props.currentView === 'createChar' ?
          <NavBarCreateChar/> :
          null}
    </div>
  );
};

export default NavBar;