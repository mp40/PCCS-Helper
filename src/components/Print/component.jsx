import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gearShape } from '../../helpers/proptypeShapes';

import GameSheet from '../GameSheet';

const Print = ({ characterStats, combatStats, gear, handlePrintToggleOff }) => {
  const promisePrint = () => new Promise(((resolve) => {
    window.print();
    resolve();
  }));

  useEffect(() => {
    const gameSheet = document.getElementsByClassName('a4GameSheet')[0].innerHTML;
    const gameSheetHtml = `<html><head><title></title></head><body>${gameSheet}</body></html>`;
    const characterGenerationPage = document.body.innerHTML;
    document.body.innerHTML = gameSheetHtml;
    window.print();
    handlePrintToggleOff();
    // promisePrint().then(() => handlePrintToggleOff());
    document.body.innerHTML = characterGenerationPage;
  });
  return (
    <GameSheet characterStats={characterStats} combatStats={combatStats} gear={gear} />
  );
};

Print.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  characterStats: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  combatStats: PropTypes.object,
  gear: gearShape,
};

export default Print;
