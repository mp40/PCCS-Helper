const {
  findHighestCombatLevel,
  findSAL,
  calcSkillFactor,
  calcKV,
  calcCombatActions,
} = require('../../helpers/helperFunctions');

export const modifyGunCombatLevelReducer = (state, action) => {
  const newSkillAccuracyLevel = findSAL(action.payload);
  const newIntelligenceSkillFactor = calcSkillFactor(state.currentCharacter.int, newSkillAccuracyLevel);
  const newGunCombatActions = calcCombatActions(state.currentCharacter.maxSpeed, newIntelligenceSkillFactor);
  const highestCombatSkill = findHighestCombatLevel(action.payload, state.currentCharacter.handLevel);

  return { ...state,
    currentCharacter: { ...state.currentCharacter,
      gunLevel: action.payload,
      SAL: newSkillAccuracyLevel,
      ISF: newIntelligenceSkillFactor,
      knockoutValue: calcKV(state.currentCharacter.wil, highestCombatSkill),
      gunCombatActions: newGunCombatActions } };
};
