const {
  calcMaxSpeed,
  calcSkillFactor,
  calcCombatActions,
  calcDB,
} = require('../../helpers/helperFunctions');

export const modifyAgilityValueReducer = (state, action) => {
  const newMaxSpeed = calcMaxSpeed(action.payload, state.currentCharacter.baseSpeed);
  const newAgilitySkillFactor = calcSkillFactor(action.payload, state.currentCharacter.CE);
  const newDamageBonus = calcDB(newMaxSpeed, newAgilitySkillFactor);
  const newGunCombatActions = calcCombatActions(newMaxSpeed, state.currentCharacter.ISF);
  const newMeleeCombatActions = calcCombatActions(newMaxSpeed, newAgilitySkillFactor);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      agi: action.payload,
      maxSpeed: newMaxSpeed,
      ASF: newAgilitySkillFactor,
      damageBonus: newDamageBonus,
      gunCombatActions: newGunCombatActions,
      handCombatActions: newMeleeCombatActions } };
};
