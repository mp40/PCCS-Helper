import React from 'react';
import PropTypes from 'prop-types';
import StatInput from '../widgets/StatInput';

const CombatCard = (props) => {
  const { characterStats, modifyGunCombatLevel, modifyMeleeCombatLevel } = props;
  return (
    <div>
      <div id="combatLevelInputContainer" className="tableContainerCombat">
        <table className="attributeContainer">
          <tbody>
            <tr>
              <th className="attHeading">Combat</th>
              <th className="attValHeading">Level</th>
            </tr>
            <StatInput
              statLevel={characterStats.gunLevel}
              statName="Gun"
              idRef="updateGun"
              action={modifyGunCombatLevel}
            />
            <StatInput
              statLevel={characterStats.handLevel}
              statName="Hand"
              idRef="updateHand"
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
  // updateAttributes: PropTypes.func,
  characterStats: PropTypes.objectOf(PropTypes.number),
  // totalWeight: PropTypes.number,
};

export default CombatCard;
