import React from 'react';
import PropTypes from 'prop-types';
import StatInput from '../widgets/StatInput';
import { renderAtrributeAndCombatTableHeadings } from '../widgets/renderWidgets';
import { isValidCombatLevel } from '../../helpers/gaurds';

const CombatCard = (props) => {
  const { characterStats, modifyGunCombatLevel, modifyMeleeCombatLevel } = props;
  return (
    <div>
      <div id="combatLevelInputContainer" className="tableContainerCombat">
        <table className="attributeContainer">
          <tbody>
            {renderAtrributeAndCombatTableHeadings()}
            <StatInput
              statLevel={characterStats.gunLevel}
              statName="Gun"
              idRef="updateGun"
              isValid={isValidCombatLevel}
              action={modifyGunCombatLevel}
            />
            <StatInput
              statLevel={characterStats.handLevel}
              statName="Hand"
              idRef="updateHand"
              isValid={isValidCombatLevel}
              action={modifyMeleeCombatLevel}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

CombatCard.propTypes = {
  modifyGunCombatLevel: PropTypes.func,
  modifyMeleeCombatLevel: PropTypes.func,
  characterStats: PropTypes.objectOf(PropTypes.number),
};

export default CombatCard;

/*
TODO - impliment this kind of thing above...

{Object.keys(characterStats).slice(0, 5).map((stat, index) => (
              <StatInput
                statLevel={characterStats[stat]}
                statName={statNameArray[index]}
                idRef={`update${stat.charAt(0).toUpperCase() + stat.slice(1)}`}
                isValid={isValidAttributeStat}
                action={actionsArray[index]}
                key={stat}
              />
            ))
*/
