import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../NavBar.css';

import GameSheet from '../../GameSheet';

import Print from '../../Print';

const NavBarCreateChar = ({ totalWeight }) => {
  // const [print, togglePrint] = useState(false);

  const handlePrint = () => {
    window.print();
    // const gameSheet = document.getElementsByClassName('a4GameSheet')[0];
    // const gameSheetHtml = `<html><head><title></title></head><body>${gameSheet}</body></html>`;
    // const characterGenerationPage = document.body.innerHTML;
    // document.body.innerHTML = gameSheetHtml;
    // gameSheet.focus();
    // gameSheet.contentWindow.print();
    // handlePrintToggleOff();
    // promisePrint().then(() => handlePrintToggleOff());
    // document.body.innerHTML = characterGenerationPage;
  };

  const characterWeight = Math.round((totalWeight) * 1000) / 1000;
  return (
    <div className="navCreateCharacterContainer">
      {/* {console.log('>>>!', print)} */}
      <div>Create Character</div>
      <div className="navEquipWeight">{`total lbs ${characterWeight}`}</div>
      <button
        onClick={() => handlePrint()}
      >
        Print
      </button>
      <GameSheet />
      {/* {print && <Print handlePrintToggleOff={handlePrintToggleOff} />} */}
    </div>
  );
};

NavBarCreateChar.propTypes = {
  totalWeight: PropTypes.number,
};

export default NavBarCreateChar;
