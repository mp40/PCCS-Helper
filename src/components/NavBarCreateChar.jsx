import React from 'react';
import './NavBar.css';

function NavBarCreateChar(props) {
  return (
          <div className="navCreateCharacterContainer">
              <div>Create Character</div>
              <div className="navEquipWeight">{`total lbs ${props.totalWeight}`}</div>
          </div> 
  );
};

export default NavBarCreateChar;