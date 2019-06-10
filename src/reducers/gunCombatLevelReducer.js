const {
  findSAL,
  calcSkillFactor,
  calcCombatActions,
} = require('../helpers/helperFunctions');

export const modifyGunCombatLevelReducer = (state, action) => {
  const newSkillAccuracyLevel = findSAL(action.payload);
  const newIntelligenceSkillFactor = calcSkillFactor(state.characterStats.int, newSkillAccuracyLevel);
  const newGunCombatActions = calcCombatActions(state.combatStats.maxSpeed, newIntelligenceSkillFactor);
  return { ...state,
    characterStats:
      { ...state.characterStats, gunLevel: action.payload },
    combatStats: { ...state.combatStats,
      SAL: newSkillAccuracyLevel,
      ISF: newIntelligenceSkillFactor,
      combatActions: [newGunCombatActions, ...state.combatStats.combatActions.slice(0, 1)] } };
};
