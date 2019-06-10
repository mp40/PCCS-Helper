const {
  findHighestCombatLevel,
  findSAL,
  calcSkillFactor,
  calcKV,
  calcCombatActions,
} = require('../../helpers/helperFunctions');

export const modifyGunCombatLevelReducer = (state, action) => {
  const newSkillAccuracyLevel = findSAL(action.payload);
  const newIntelligenceSkillFactor = calcSkillFactor(state.characterStats.int, newSkillAccuracyLevel);
  const newGunCombatActions = calcCombatActions(state.combatStats.maxSpeed, newIntelligenceSkillFactor);
  const highestCombatSkill = findHighestCombatLevel(action.payload, state.characterStats.handLevel);
  return { ...state,
    characterStats:
      { ...state.characterStats, gunLevel: action.payload },
    combatStats: { ...state.combatStats,
      SAL: newSkillAccuracyLevel,
      ISF: newIntelligenceSkillFactor,
      knockoutValue: calcKV(state.characterStats.wil, highestCombatSkill),
      combatActions: [newGunCombatActions, ...state.combatStats.combatActions.slice(1)] } };
};
