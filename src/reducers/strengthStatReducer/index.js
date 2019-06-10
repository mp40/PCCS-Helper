const {
  calcBaseSpeed,
  findSAL,
  calcMaxSpeed,
  calcSkillFactor,
  calcCombatActions,
  calcKV,
  calcDB,
} = require('../../helpers/helperFunctions');

export const modifyStrengthValueReducer = (state, action) => {
  const newBaseSpeed = calcBaseSpeed(action.payload, state.totalWeight);
  const newMaxSpeed = calcMaxSpeed(state.characterStats.agi, newBaseSpeed);
  const newDamageBonus = calcDB(newMaxSpeed, state.combatStats.ASF);
  const newGunCombatActions = calcCombatActions(newMaxSpeed, state.combatStats.ISF);
  const newMeleeCombatActions = calcCombatActions(newMaxSpeed, state.combatStats.ASF);
  return { ...state,
    characterStats:
      { ...state.characterStats, str: action.payload },
    combatStats: { ...state.combatStats,
      baseSpeed: calcBaseSpeed(action.payload, state.totalWeight),
      maxSpeed: newMaxSpeed,
      damageBonus: newDamageBonus,
      combatActions: [newGunCombatActions, newMeleeCombatActions] } };
};
