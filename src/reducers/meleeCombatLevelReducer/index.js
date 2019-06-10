const {
  findHighestCombatLevel,
  findSAL,
  calcSkillFactor,
  calcCombatActions,
  calcKV,
  calcDB,
} = require('../../helpers/helperFunctions');

export const modifyMeleeCombatLevelReducer = (state, action) => {
  const newCombatEfficency = findSAL(action.payload);
  const newAgilitySkillFactor = calcSkillFactor(state.characterStats.agi, newCombatEfficency);
  const newDamageBonus = calcDB(state.combatStats.maxSpeed, newAgilitySkillFactor);
  const newMeleeCombatActions = calcCombatActions(state.combatStats.maxSpeed, newAgilitySkillFactor);
  const highestCombatSkill = findHighestCombatLevel(state.characterStats.gunLevel, action.payload);
  return { ...state,
    characterStats:
    { ...state.characterStats, handLevel: action.payload },
    combatStats: { ...state.combatStats,
      CE: newCombatEfficency,
      ASF: newAgilitySkillFactor,
      damageBonus: newDamageBonus,
      knockoutValue: calcKV(state.characterStats.wil, highestCombatSkill),
      combatActions: [...state.combatStats.combatActions.slice(0, 1), newMeleeCombatActions] } };
};
