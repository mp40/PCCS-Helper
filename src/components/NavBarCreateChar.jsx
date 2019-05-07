import React from 'react';
import './NavBar.css';

function NavBarCreateChar(props) {
  const characterWeight = Math.round((props.totalWeight)*1000)/1000
  return (
          <div className="navCreateCharacterContainer">
              <div>Create Character</div>
              <div className="navEquipWeight">{`total lbs ${characterWeight}`}</div>
          </div> 
  );
};

export default NavBarCreateChar;