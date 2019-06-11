const {
  calcMaxSpeed,
  calcSkillFactor,
  calcCombatActions,
  calcDB,
} = require('../../helpers/helperFunctions');

export const modifyAgilityValueReducer = (state, action) => {
  const newMaxSpeed = calcMaxSpeed(action.payload, state.combatStats.baseSpeed);
  const newAgilitySkillFactor = calcSkillFactor(action.payload, state.combatStats.CE);
  const newDamageBonus = calcDB(newMaxSpeed, newAgilitySkillFactor);
  const newGunCombatActions = calcCombatActions(newMaxSpeed, state.combatStats.ISF);
  const newMeleeCombatActions = calcCombatActions(newMaxSpeed, newAgilitySkillFactor);

  return { ...state,
    characterStats:
    { ...state.characterStats, agi: action.payload },
    combatStats: { ...state.combatStats,
      maxSpeed: newMaxSpeed,
      ASF: newAgilitySkillFactor,
      damageBonus: newDamageBonus,
      combatActions: [newGunCombatActions, newMeleeCombatActions] } };
};
